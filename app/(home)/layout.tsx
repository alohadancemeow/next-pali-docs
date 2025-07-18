import { baseOptions } from "@/app/layout.config";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { Book, ComponentIcon, Kanban, Palette, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      style={
        {
          "--spacing-fd-container": "1120px",
        } as object
      }
      links={[
        // mobile menu items
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [
            {
              text: "Getting Started",
              url: "/docs/ui/getting-started/introduction",
              icon: <Book />,
            },
            {
              text: "Components",
              url: "/docs/ui/everything-by-hextaui/base-components",
              icon: <ComponentIcon />,
            },
          ],
        },
        // only displayed on navbar, not mobile menu
        {
          type: "custom",
          on: "nav",
          children: <MainMenu />,
        },
        // other items
        ...(baseOptions.links ?? []),
        {
          type: "custom",
          children: <Reference />,
          secondary: true,
        },
      ]}
    >
      {children}
      <Footer />
    </HomeLayout>
  );
}

const MainMenu = () => (
  <NavbarMenu>
    <NavbarMenuTrigger>
      <Link href="/docs">Documentation</Link>
    </NavbarMenuTrigger>
    <NavbarMenuContent className="text-[15px]">
      <NavbarMenuLink
        href="/docs/ui/getting-started/introduction"
        className="md:row-span-2"
      >
        <div className="-mx-3 -mt-3">
          <Image
            src="/Screenshot.png"
            width={500}
            height={200}
            layout="responsive"
            alt="Perview"
            className="rounded-t-lg object-cover"
            style={{
              maskImage: "linear-gradient(to bottom,white 60%,transparent)",
            }}
          />
        </div>
        <p className="font-medium">Getting Started</p>
        <p className="text-muted-foreground text-sm">
          Introduction and installation guide for HextaUI.
        </p>
      </NavbarMenuLink>

      <NavbarMenuLink
        href="/docs/ui/getting-started/installation"
        className="lg:col-start-2"
      >
        <Zap className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
        <p className="font-medium">Installation</p>
        <p className="text-muted-foreground text-sm">
          How to install and set up HextaUI in your project.
        </p>
      </NavbarMenuLink>

      <NavbarMenuLink
        href="docs/ui/everything-by-hextaui/base-components"
        className="lg:col-start-2"
      >
        <ComponentIcon className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
        <p className="font-medium">Components</p>
        <p className="text-muted-foreground text-sm">
          A complete set of base components projects. Copy, adapt, and
          personalize them.
        </p>
      </NavbarMenuLink>

      <NavbarMenuLink
        href="/docs/ui/foundation/theming"
        className="lg:col-start-3 lg:row-start-1"
      >
        <Palette className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
        <p className="font-medium">Theming</p>
        <p className="text-muted-foreground text-sm">
          How to customize the look and feel of HextaUI components using themes.
        </p>
      </NavbarMenuLink>

      <NavbarMenuLink
        href="/docs/ui/getting-started/roadmap"
        className="lg:col-start-3 lg:row-start-2"
      >
        <Kanban className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
        <p className="font-medium">Roadmap</p>
        <p className="text-muted-foreground text-sm">
          Explore the future plans and features for HextaUI.
        </p>
      </NavbarMenuLink>
    </NavbarMenuContent>
  </NavbarMenu>
);

const Reference = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="secondary" className="rounded-full" asChild>
        <TrackedLink
          href="https://pali-on-demand.vercel.app/"
          className="font-medium"
          target="_blank"
          // goal="sponsor_ikiform_click"
        >
          <Image
            src="https://www.ikiform.com/favicon.ico"
            alt="pali-on-demand"
            width={17}
            height={17}
          />
          pali-on-demand
        </TrackedLink>
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>The original content is available on pali-on-demand</p>
    </TooltipContent>
  </Tooltip>
);

function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Fumadocs</p>
          <p className="text-xs">
            Built with ❤️ by{" "}
            <a
              href="https://fuma-dev.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Fuma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
