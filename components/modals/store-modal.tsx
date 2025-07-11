"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Criar Loja"
      description="Adicione uma nova loja para gerenciar produtos e caategorias"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Formulário
    </Modal>
  );
};
