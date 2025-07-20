"use cliente";

import React from "react";
import { ToastContainer, Bounce } from "react-toastify";

// toastify é o responsável por exibir as notificações na tela para o usuário
export const Toastify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};
