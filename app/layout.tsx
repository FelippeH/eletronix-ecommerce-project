import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Notify } from "@/components/Modals/toastify-provider";
import { ModalProvider } from "@/providers/modal-provider";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* Importa fontes para uso global */
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Layout principal da aplicação */
    /* Envolve a aplicação com o ClerkProvider para autenticação */
    <ClerkProvider>
      <html lang="pt">
        <body className={montserrat.className}>
          <Header />
          <Notify />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
