"use client";

import "@docsearch/css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DocSearch } from "@docsearch/react";
import { useTheme } from "next-themes";

type Props = {};

/// Loading fallback
const SearchFallback = () => (
  <div className="flex items-center justify-center p-2">
    <div className="animate-pulse bg-gray-200 rounded-md h-10 w-64">
      <span className="sr-only">Loading search...</span>
    </div>
  </div>
);

// Error fallback
const SearchErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <div className="text-sm text-red-500 p-2">
    <p>Search temporarily unavailable</p>
    <button onClick={resetErrorBoundary} className="text-xs underline mt-1">
      Try again
    </button>
  </div>
);

// DocSearch component
const DocSearchComponent = () => {
  const { theme } = useTheme();

  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
  const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

  if (!appId || !apiKey) {
    throw new Error("Algolia credentials not configured");
  }

  return (
    <div>
      <DocSearch
        appId={appId}
        apiKey={apiKey}
        indexName="docs"
        placeholder="Search documentation..."
        searchParameters={{
          hitsPerPage: 20,
          // attributesToRetrieve: [
          //   "hierarchy",
          //   "content",
          //   "url",
          //   "type",
          //   "title",
          //   "description",
          // ],
        }}
        transformItems={(items) =>
          items.map((item) => ({
            ...item,
            url: `${window.location.origin}${item.url}`,
          }))
        }
        theme={theme === "light" ? "light" : "dark"}
        askAi={{
          assistantId: process.env.NEXT_PUBLIC_ALGOLIA_ASSISTANT_ID as string,
        }}
      />
    </div>

    // # Testing
    // <DocSearch
    //   appId="PMZUYBQDAK"
    //   apiKey="24b09689d5b4223813d9b8e48563c8f6"
    //   indexName="docsearch"
    // />
  );
};

const AlgoliaSearch = (props: Props) => {
  return (
    <ErrorBoundary
      FallbackComponent={SearchErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<SearchFallback />}>
        <DocSearchComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AlgoliaSearch;

// f:{"messageId":"msg-Vcln5uu1Vmbjn2QHuZC4jmUW"}
// 9:{"toolCallId":"call_0vTDjDdJDv13E5syZZXqLYQO","toolName":"searchIndex","args":{"query":"คุณนาม"}}
// a:{"toolCallId":"call_0vTDjDdJDv13E5syZZXqLYQO","result":{"hits":[{"title":"คุณนาม","url":"/docs/part-2/vol-2.1/chapter-1#","content":"คุณนาม","objectID":"/docs/part-2/vol-2.1/chapter-1#4","_highlightResult":{"title":{"value":"<mark>คุณนาม</mark>","matchLevel":"full","fullyHighlighted":true,"matchedWords":["คุณนาม"]},"content":{"value":"<mark>คุณนาม</mark>","matchLevel":"full","fullyHighlighted":true,"matchedWords":["คุณนาม"]}}},{"title":"[๔๒] คุณนามเป็น ๓ ลิงค์","url":"/docs/part-2/vol-2.1/chapter-1#","content":"[๔๒] คุณนามเป็น ๓ ลิงค์","objectID":"/docs/part-2/vol-2.1/chapter-1#14","_highlightResult":{"title":{"value":"[๔๒] <mark>คุณนาม</mark>เป็น ๓ ลิงค์","matchLevel":"full","fullyHighlighted":false,"matchedWords":["คุณนาม"]},"content":{"value":"[๔๒] <mark>คุณนาม</mark>เป็น ๓ ลิงค์","matchLevel":"full","fullyHighlighted":false,"matchedWords":["คุณนาม"]}}},{"title":"นาม","url":"/docs/part-2/vol-2.1/chapter-1","section":"อายตนิบาต","section_id":"อายตนิบาต","content":"นามนาม คุณนาม สัพพนาม","objectID":"/docs/part-2/vol-2.1/chapter-1","_highlightResult":{"title":{"value":"นาม","matchLevel":"none","matchedWords":[]},"section":{"value":"อายตนิบาต","matchLevel":"none","matchedWords":[]},"content":{"value":"นามนาม <mark>คุณนาม</mark> สัพพนาม","matchLevel":"full","fullyHighlighted":false,"matchedWords":["คุณนาม"]}}}],"nbHits":3,"page":0,"nbPages":1,"hitsPerPage":7,"exhaustiveNbHits":true,"exhaustiveTypo":true,"exhaustive":{"nbHits":true,"typo":true},"query":"คุณนาม","params":"query=%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%99%E0%B8%B2%E0%B8%A1&hitsPerPage=7","renderingContent":{},"processingTimeMS":1,"processingTimingsMS":{"_request":{"queue":1,"roundTrip":117},"total":0},"serverTimeMS":2}}
// e:{"finishReason":"tool-calls","usage":{"promptTokens":1082,"completionTokens":16},"isContinued":false}
// f:{"messageId":"msg-AVadMbSugzdu5R9bfLyF8jyA"}
