"use client";

import { cn } from "@/libs/shadcn/utils";

import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AlertUuid = () => {
  const [copyUuid, setCopyUuid] = useState(false);
  const uuidRef = useRef<string>(uuidv4());

  const handleCopyButton = () => {
    if (!uuidRef.current) {
      return null;
    }

    navigator.clipboard.writeText(uuidRef.current);

    setCopyUuid(true);
  };

  return (
    <div
      className="flex items-center justify-between rounded-md border-[1px]
border-black/20 p-2"
    >
      <p className="text-black">{uuidRef.current}</p>
      <button
        onClick={handleCopyButton}
        className={cn(
          "rounded-md bg-black px-2 py-1 text-white",
          copyUuid && "bg-black/50"
        )}
      >
        {copyUuid ? "copied!" : "copy"}
      </button>
    </div>
  );
};
