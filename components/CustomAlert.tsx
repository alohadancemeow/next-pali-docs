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
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <AlertCircleIcon />
        <AlertTitle>{title}</AlertTitle>
        {description && <AlertDescription>{description}</AlertDescription>}
        {children && <AlertDescription>{children}</AlertDescription>}
      </Alert>
    </div>
  );
}
