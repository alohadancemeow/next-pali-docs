"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingOverlayProps {
  duration?: number;
  onComplete: () => void;
}

export function LoadingOverlay({
  duration = 15,
  onComplete,
}: LoadingOverlayProps) {
  const [progress, setProgress] = useState(0);

  // Effect for progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration * 10);
        return Math.min(newProgress, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  // effect for completion check
  useEffect(() => {
    if (progress >= 100) {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-lg space-y-4 p-2 text-center">
        <h2 className="text-2xl font-bold">AI กำลังสร้างแบบทดสอบ</h2>
        <p className="text-muted-foreground">
          เตรียมพร้อมสำหรับคำถามที่คัดสรรมาอย่างดี และความท้าทายที่รอคุณอยู่...
        </p>
        <Progress value={progress} className="h-2 w-full" />
        <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
