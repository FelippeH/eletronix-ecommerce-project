"use client";

import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

/* Página de configuração inicial da aplicação */
/* Utiliza o hook useStoreModal para abrir o modal de loja ao carregar a página */
const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  /* Verifica se o modal não está aberto e chama onOpen */
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  /* Renderiza a página de configuração */
  return <div className="p-4">Root Page</div>;
};

export default SetupPage;
