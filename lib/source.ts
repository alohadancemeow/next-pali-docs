import { docs, meta, blog as blogPosts } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { icons } from "lucide-react";
import { createElement } from "react";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: "/docs",
  // source: docs.toFumadocsSource(),
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
});
