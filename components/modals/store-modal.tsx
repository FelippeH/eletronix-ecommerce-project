"use client";

import * as z from "zod";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/* Schema de validação do formulário usando Zod */
const formSchema = z.object({
  name: z.string().min(3),
});

/* Utiliza o hook useStoreModal para controlar a visibilidade do modal */
export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  // Configura o formulário com validação Zod e valores padrão
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  /* Função para lidar com o envio do formulário */
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      // usado o axios par fazer a requisição a api store
      const response = await axios.post("/api/stores", values, {
        withCredentials: true,
      });
      console.log(response);
      toast.success("Loja criada com sucesso");
    } catch {
      toast.error("Erro na execução");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Modal para criar uma nova loja */
    /* Exibe o modal se storeModal.isOpen for true */
    <Modal
      title="Criar loja"
      description="Adicionar uma nova loja para gerenciar produtos e categorias"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da loja</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Criar loja"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className="pt-6 space-x-2
                flex
                items-center
                justify-end
                w-full"
              >
                {/* Botões do modal */}
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storeModal.onClose}
                >
                  Cancelar
                </Button>
                <Button disabled={loading} type="submit">
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
