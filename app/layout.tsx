import "@/app/global.css";
import { Provider } from "@/providers/RootProvider";
import { Thasadith, Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const thasadith = Thasadith({
  subsets: ["thai"],
  display: "swap",
  weight: ["400", "700"],
});

// // Function to detect Thai language content
// const isThaiContent = (text: string): boolean => {
//   // Thai Unicode range: U+0E00-U+0E7F
//   const thaiPattern = /[\u0E00-\u0E7F]/;
//   return thaiPattern.test(text);
// };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Provider>
          <div className="thai-content-wrapper">{children}</div>
        </Provider>

        <script src="https://cdn.jsdelivr.net/npm/@docsearch/react@3"></script>
      </body>
    </html>
  );
}
