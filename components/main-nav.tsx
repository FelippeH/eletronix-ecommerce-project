"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

// implementação da função de 'configuração' da loja do usuário

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname(); // captura a url atual. ex: '.../loja25/settings'
  const params = useParams(); // retorna o parâmetro da rota dinâmica. ex: 'loja25'

  const routes = [
    {
      href: `/${params.storeSlug}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeSlug}/settings`,
    },
  ];

  return (
    <nav className={cn("fixed top-auto right-40", className)}>
      {routes.map(
        (
          route // map percorre todos os itens da variável 'route' e retorna um link para cada item
        ) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-xl font-medium transition-color hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        )
      )}
    </nav>
  );
}
