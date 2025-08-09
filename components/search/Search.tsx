"use client";

import MySearchDialog from "./MySearchDialog";
import { type SharedProps } from "fumadocs-ui/components/dialog/search";

export default function CustomSearchDialog(props: SharedProps) {
  return (
    <>
      <MySearchDialog {...props} />;
    </>
  );
}
