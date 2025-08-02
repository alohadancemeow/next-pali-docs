"use client";

import client from "@/lib/algolia-client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useDocsSearch } from "fumadocs-core/search/client";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import type { DocumentRecord } from "fumadocs-core/search/algolia";

function CustomSearchItem({ item }: { item: any }) {
  console.log(item);

  return (
    <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
      <h3 className="font-medium text-sm">{item.content}</h3>
      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.type}</p>
      <div className="text-[10px] text-gray-400 mt-1">{item.url}</div>
    </div>
  );
}

export default function CustomSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const { search, setSearch, query } = useDocsSearch({
    type: "algolia",
    client,
    indexName: "docs",
    locale,
  });

  console.log(query.data, "data");

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          items={query.data !== "empty" ? query.data : null}
          // Item={(props) => <CustomSearchItem item={props.item} />}
        />
        <SearchDialogFooter>
          <a
            href="https://algolia.com"
            rel="noreferrer noopener"
            className="ms-auto text-xs text-fd-muted-foreground"
          >
            Search powered by Algolia
          </a>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
