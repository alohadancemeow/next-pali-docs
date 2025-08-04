"use client";

import { RootProvider } from "fumadocs-ui/provider";
// your custom dialog
import SearchDialog from "@/components/search/Search";
import { useState, type ReactNode, useEffect } from "react";

export function Provider({ children }: { children: ReactNode }) {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, [isMount]);

  if (!isMount) return null;

  return (
    <RootProvider
      search={{
        SearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}
