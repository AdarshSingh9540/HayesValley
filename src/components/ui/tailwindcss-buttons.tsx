"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-60 w-full bg-black rounded-xl border border-neutral-800 dark:bg-black dark:border-neutral-700 hover:border-neutral-600 group/btn overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 bg-dot-black/[0.1]" />
      <IconClipboard className="absolute top-2 right-2 text-neutral-500 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};
