import {
  KeyboardIcon,
  LayoutIcon,
  LucideIcon,
  MousePointer,
  PersonStandingIcon,
  RocketIcon,
  SearchIcon,
  TimerIcon,
} from "lucide-react";
import { ReactNode } from "react";

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          Highlights
        </h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>
      <Highlight icon={TimerIcon} heading="Light & Fast.">
        Less Javascript with React Server Components, and optimized images.
      </Highlight>
      <Highlight icon={LayoutIcon} heading="Accessibility & UX first.">
        Focus on user experience and accessibility.
      </Highlight>
      <Highlight icon={RocketIcon} heading="Next.js First.">
        Powerful documentation site with Next.js, React Router, or Tanstack
        Start.
      </Highlight>
      <Highlight icon={SearchIcon} heading="Syntax Highlighting.">
        Beautiful syntax highlighter, powered by{" "}
        <a href="https://shiki.style" rel="noreferrer noopener">
          Shiki
        </a>
        .
      </Highlight>
      <Highlight icon={KeyboardIcon} heading="Automation.">
        Useful remark/rehype plugins. Typescript Twoslash, OpenAPI docs
        generation, and more.
      </Highlight>
      <Highlight icon={PersonStandingIcon} heading="Personalized.">
        Advanced options for customising your theme in a comfortable way.
      </Highlight>
    </div>
  );
};

export default Highlights;

const Highlight = ({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement => {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
};
