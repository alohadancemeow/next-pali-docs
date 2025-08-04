import { Hash, FileText } from "lucide-react";
import { SearchResult } from "./MySearchDialog";

const CustomSearchItem = ({ item }: { item: SearchResult }) => {
  //   NOT WORKING: type always "page"
  const getResultIcon = (type: string) => {
    switch (type) {
      case "heading":
        return <Hash className="w-6 h-6 text-fd-foreground mt-[0.5px]" />;
      case "text":
        return <FileText className="w-6 h-6 text-fd-foreground mt-[0.5px]" />;
      default:
        return <FileText className="w-6 h-6 text-fd-foreground mt-[0.5px]" />;
    }
  };

  const renderHighlightedText = (text: string) => {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(
            /<mark>/g,
            '<mark class="bg-yellow-200 dark:bg-yellow-800">'
          ),
        }}
      />
    );
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-md hover:bg-fd-accent/50 cursor-pointer">
      <div className="flex flex-col items-center justify-between h-[-webkit-fill-available]">
        {getResultIcon(item.type)}
        <div className="w-[1px] h-[-webkit-fill-available] bg-fd-border mt-1.5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-sm truncate text-fd-foreground">
            {item._highlightResult?.title?.value
              ? renderHighlightedText(item._highlightResult.title.value)
              : item.title}
          </h3>
          {/* <span className="text-xs px-2 py-1 bg-fd-muted rounded-full text-fd-muted-foreground">
            {item.type}
          </span> */}
        </div>
        {item.section && (
          <div className="flex items-center gap-2 my-2">
            <Hash className="w-4 h-4 text-fd-muted-foreground" />
            <p className="text-xs text-fd-primary">{item.section}</p>
          </div>
        )}
        <p className="text-sm text-fd-muted-foreground line-clamp-2">
          {item._highlightResult?.content?.value
            ? renderHighlightedText(item._highlightResult.content.value)
            : item.content}
        </p>
        {/* <div className="text-xs text-fd-muted-foreground/70 mt-1 truncate">
          {item.url}
        </div> */}
      </div>
    </div>
  );
};

export default CustomSearchItem;
