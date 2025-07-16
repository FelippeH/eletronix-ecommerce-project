"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modals/store-modal";

/* Componente responsável por exibir o modal após a montagem do client */
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Define que o componente foi montado no client
    setIsMounted(true);
  }, []);
  // Evita renderizar o modal durante o SSR ou pré-render
  if (!isMounted) {
    return null;
  }

  // Renderiza o modal apenas após a montagem no client
  return (
    <>
      <StoreModal />
    </>
  );
};
