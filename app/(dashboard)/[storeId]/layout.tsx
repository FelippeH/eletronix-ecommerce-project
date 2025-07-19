import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = await auth();

  // se o usuário não estiver autenticado ele será redirecionado para a página de login.
  if (!userId) {
    redirect("/login");
  }

  // verifica se o id da loja passado no url se encontra no banco de dados.
  // também verifica se a loja foi criada pelo usuário autenticado que está tentando acessá-la.
  const store = await prismadb.store.findFirsrt({
    where: {
      id: params.storeId,
      userId,
    },
  });
  // se o id da loja não for encontrado ele retornará para a página inicial.
  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>Menu</div>
      {children}
    </>
  );
}
