import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      lang="th"
      className="relative z-2 flex flex-col border-x border-t bg-fd-background/80 px-4 py-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden"
    >
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
      <div className="flex flex-col gap-4 md:flex-row">
        <div>
          <h1 className="mb-8 text-4xl font-semibold md:hidden">
            เรียนรู้ภาษาบาลีที่ครอบคลุมทุกระดับ
          </h1>
          <h1 className="mb-8 max-w-[600px] text-4xl leading-snug max-md:hidden font-extrabold">
            เรียนรู้บาลีไวยากรณ์และค้นคว้าได้ด้วยตัวเองอย่างมีประสิทธิภาพ
          </h1>
          <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-lg font-semibold">
            แหล่งเรียนรู้ภาษาบาลีที่ครอบคลุมทุกระดับ ด้วยเนื้อหาที่เป็นระบบ
            ครบถ้วน และเข้าใจง่าย ตั้งแต่พื้นฐานจนถึงขั้นสูง
            ค้นคว้าและเรียนรู้ได้ด้วยตัวเองอย่างมีประสิทธิภาพ
          </p>
          <div className="inline-flex items-center gap-3 max-md:mx-auto">
            <Link
              href="/docs/part-1"
              className={cn(
                buttonVariants({ size: "lg", className: "rounded-full" })
              )}
            >
              เริ่มต้นเรียนบาลีไวยากรณ์
              <ArrowRight />
            </Link>
            <a
              href="/quiz"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "rounded-full bg-fd-background",
                })
              )}
            >
              ทำแบบทดสอบ
              <CheckLine />
            </a>
          </div>
        </div>

        <div className="h-full m-auto hidden md:block">
          <Image
            src="/hero-image.webp"
            alt="image"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
