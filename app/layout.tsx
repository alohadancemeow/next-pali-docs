import "@/app/global.css";
import { Provider } from "@/providers/RootProvider";
import { Inter, Thasadith } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
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
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Provider>
          <div className="thai-content-wrapper">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
