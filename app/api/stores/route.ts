import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    // obtém o ID do user autenticado via Clerk
    const { userId } = await auth();
    const body = await req.json();
    const { name } = body;

    // verifica se o nome foi enviado, se não, retorna erro 400 (requisição inválida)
    if (!name) {
      return new NextResponse("Erro! O nome é obrigatório", { status: 400 });
    }

    // verifica se há um usuário autenticado, se não, retorna erro 401 (não autorizado)
    if (!userId) {
      return new NextResponse("Erro! Não autorizado", { status: 401 });
    }

    // cria um novo registro na tabela "store" com os dados fornecidos
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    // retorna a loja recém-criada como resposta JSON
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
