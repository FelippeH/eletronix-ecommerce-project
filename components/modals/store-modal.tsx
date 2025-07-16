"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
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

  // Configura o formulário com validação Zod e valores padrão
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  /* Função para lidar com o envio do formulário */
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
                      <Input placeholder="Digite o nome da loja" {...field} />
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
                <Button variant="outline" onClick={storeModal.onClose}>
                  Cancelar
                </Button>
                <Button type="submit">Continuar</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
