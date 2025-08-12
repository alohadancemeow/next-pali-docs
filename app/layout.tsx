import "@/app/global.css";
import { Provider } from "@/providers/RootProvider";
import {
  Thasadith,
  Geist,
  Geist_Mono,
  IBM_Plex_Sans_Thai,
} from "next/font/google";
import Head from "next/head";
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

const ibm = IBM_Plex_Sans_Thai({
  variable: "--font-ibm",
  subsets: ["thai", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
      <Head>
        <meta name="algolia-site-verification" content="C43FA7A055938012" />
      </Head>

      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Provider>
          <div lang="th">{children}</div>
        </Provider>

        <script src="https://cdn.jsdelivr.net/npm/@docsearch/react@3"></script>
      </body>
    </html>
  );
}
