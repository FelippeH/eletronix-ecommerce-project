import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { Toastify } from "@/app/providers/toastify";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
}); /* Importa a fonte Inter para uso global */

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
  icons: {
    icon: "/icon.svg",
  },
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
        <body className={inter.className}>
          <Toastify />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
