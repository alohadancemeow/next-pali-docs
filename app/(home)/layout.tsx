import { baseOptions } from "@/app/layout.config";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { Card, Cards } from "fumadocs-ui/components/card";
import { HomeIcon } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          type: "custom",
          // only displayed on navbar, not mobile menu
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>Documentation</NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs">Hello World</NavbarMenuLink>
                <Cards>
                  <Card
                    href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
                    title="Fetching, Caching, and Revalidating"
                  >
                    Learn more about caching in Next.js
                  </Card>
                  <Card title="href is optional">
                    Learn more about `fetch` in Next.js.
                  </Card>
                </Cards>
                <Cards>
                  <Card icon={<HomeIcon />} href="/" title="Home">
                    You can include icons too.
                  </Card>
                  <Card icon={<HomeIcon />} href="/" title="Home">
                    You can include icons too.
                  </Card>
                </Cards>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },

        // other items
        ...(baseOptions.links ?? []),
      ]}
    >
      {children}
    </HomeLayout>
  );
}
