"use client";

import { cn } from "@/libs/shadcn/utils";

import { Inter } from "next/font/google";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  return (
    <form
      action=""
      className="w-[calc(100vw-64px)] md:w-[702px]"
    >
      <TextareaAutosize
        autoFocus
        spellCheck={false}
        maxLength={1000}
        className={cn(
          `${inter.className} h-full w-full resize-none rounded-none
border-[1px] border-black p-3 outline-none`
        )}
      />
    </form>
  );
};
