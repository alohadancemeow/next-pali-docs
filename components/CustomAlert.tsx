import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid w-full items-start gap-4">
      <Alert>
        <AlertCircleIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="mt-1">
          {!description && children ? (
            <div className="mt-[-8px]">{children}</div>
          ) : (
            <>
              {description}
              <div className="mt-[-16px]">{children}</div>
            </>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
}
