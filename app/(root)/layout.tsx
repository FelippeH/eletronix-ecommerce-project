import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  // autenticação com clerk
  // usa o auth para verificar se o usuário está logado
  if (!userId) {
    redirect("/login");
  }

  // verifica e retorna a primeira loja(id) atrelado ao usuário(userid)
  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }
  return <>{children}</>;
}
