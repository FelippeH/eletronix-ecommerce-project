import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeSlug: string };
}) {
  // autenticação com clerk
  // usa o auth para verificar se o usuário está logado
  //try {
  const { userId } = await auth();

  // se o usuário não estiver logado, ele é redirecionado para a página de login
  if (!userId) {
    redirect("/login");
  }

  const { storeSlug } = await params;
  const store = await prismadb.store.findFirst({
    where: {
      slug: storeSlug,
      userId,
    },
  });

  // usa o auth para verificar se a loja existe
  if (!store) {
    return <div>Loja não encontrada.</div>;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
//} catch (err: any) {
//    console.error("Erro no DashboardLayout:", err);
//    redirect("/login");
//  }
//};
