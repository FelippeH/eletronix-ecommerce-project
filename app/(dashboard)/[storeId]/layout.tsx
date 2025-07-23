import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  // autenticação com clerk
  // usa o auth para verificar se o usuário está logado
  const { userId } = await auth();

  // se o usuário não estiver logado, ele é redirecionado para a página de login
  if (!userId) {
    redirect("/login");
  }

  const { storeId } = await params;
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  // usa o auth para verificar se a loja existe
  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
