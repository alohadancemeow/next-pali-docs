import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BatteryChargingIcon, TimerIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4 z-2 lg:py-8">
      {/* <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p> */}

      <div
        style={{
          background:
            "repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)",
        }}
      >
        <div className="relative">
          <Hero />
          {/* <UwuHero /> */}
        </div>
        {/* <Feedback />
        <Introduction /> */}
        <div
          className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)",
          }}
        >
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            Loved by users.
            <br />
            Built for developers.
          </h2>
        </div>
        {/* 
        <Features />
        <Highlights />
        <Why />
        <Contributing />
        */}
        <Architecture />
        <End />
      </div>
    </main>
  );
}

const Hero = () => {
  return (
    <div className="relative z-2 flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
      {/* <div
        className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          background:
            "repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)",
        }}
      />
      <div
        className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          background:
            "repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)",
        }}
      /> */}
      <h1 className="mb-8 text-4xl font-medium md:hidden">Build Your Docs</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        Build excellent documentation site with less effort
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Fumadocs is a beautiful documentation framework for Developers, flexible
        and performant, with everything from Next.js.
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto mb-12">
        <Link
          href="/docs"
          className={cn(
            buttonVariants({ size: "lg", className: "rounded-full" })
          )}
        >
          Getting Started
        </Link>
        <a
          href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "outline",
              className: "rounded-full bg-fd-background",
            })
          )}
        >
          Open Demo
        </a>
      </div>
    </div>
  );
};

const Architecture = () => {
  return (
    <div className="flex flex-col gap-4 border-x border-t p-8 md:px-12 lg:flex-row">
      <div className="text-start">
        <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
          Designed with Love
        </p>
        <h2 className="text-2xl font-semibold mb-4">A breakable framework.</h2>
        <p className="text-fd-muted-foreground mb-6">
          Fumadocs makes it easy to build beautiful docs, write content, and
          transform content into data for your React.js framework.
        </p>
      </div>
      {/* <Image
        src={"/Screenshot.png"}
        alt="Architecture"
        className="mx-auto -my-16 w-full max-w-[400px] invert dark:invert-0 lg:mx-0"
      /> */}
    </div>
  );
};

const End = () => {
  return (
    <div className="flex flex-col border-b border-r md:flex-row *:border-l *:border-t">
      <div className="group flex flex-col min-w-0 flex-1 pt-8 **:transition-colors">
        <h2 className="text-3xl text-center font-extrabold font-mono uppercase text-fd-muted-foreground mb-4 lg:text-4xl group-hover:text-orange-500">
          Build Your Docs
        </h2>
        <p className="text-center font-mono text-xs text-fd-foreground/60 mb-8 group-hover:text-orange-500/80">
          light and gorgeous, just like the moon.
        </p>
        <div className="h-[200px] overflow-hidden p-8 bg-gradient-to-b from-fd-primary/10 group-hover:from-orange-500/10">
          <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-fd-primary size-[500px] rounded-full group-hover:from-orange-500 group-hover:to-orange-600/10" />
        </div>
      </div>
      <ul className="flex flex-col gap-4 p-6 pt-8">
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <BatteryChargingIcon className="size-5" />
            Battery guaranteed.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Actively maintained, open for contributions.
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Fully open-source.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Open source, available on Github.
          </span>
        </li>
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <TimerIcon className="size-5" />
            Within seconds.
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            Initialize a new project instantly with CLI.
          </span>
        </li>
        <li className="flex flex-row flex-wrap gap-2 mt-auto">
          <Link href="/docs" className={cn(buttonVariants())}>
            Read docs
          </Link>
          <a
            href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            Open Demo
          </a>
        </li>
      </ul>
    </div>
  );
};
