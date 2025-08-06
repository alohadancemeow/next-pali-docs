"use client";
import { type ButtonHTMLAttributes, useState } from "react";
import dynamic from "next/dynamic";

// lazy load the dialog
const SearchAI = dynamic(() => import("./search"), { ssr: false });

/**
 * The trigger component for AI search dialog.
 *
 * Use it like a normal button component.
 */
export function AISearchTrigger({
  open,
  setOpen,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  // const [open, setOpen] = useState<boolean>();

  return (
    <>
      {open !== undefined ? (
        <SearchAI open={open} onOpenChange={setOpen} />
      ) : null}
      {/* <button {...props} onClick={() => setOpen(true)}>
        Search with AI
      </button> */}
    </>
  );
}
