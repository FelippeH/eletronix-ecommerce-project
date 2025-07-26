import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { name } = body;

    if (!userId) {
      return new NextResponse("Acesso não autorizado", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Nome é obrigatório", { status: 400 });
    }

    // uso do slug para simplificar a url da página
    const baseSlug = slugify(name, { lower: true, strict: true });

    // verifica se já existe a loja com o mesmo slug
    let slug = baseSlug;
    let count = 1;

    while (await prismadb.store.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${count++}`;
    }

    const store = await prismadb.store.create({
      data: {
        name,
        slug,
        userId,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
