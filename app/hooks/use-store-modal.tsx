import { create } from "zustand";

type useStoreModalInterface = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

/* Hook personalizado para gerenciar o estado do modal da loja */
/* Utiliza Zustand para criar um estado global para o moda */
export const useStoreModal = create<useStoreModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }) /* Função para abrir o modal */,
  onClose: () => set({ isOpen: false }) /* Função para fechar o modal */,
}));
