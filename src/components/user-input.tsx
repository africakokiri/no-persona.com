"use client";

import { cn } from "@/libs/shadcn/utils";

import { Inter } from "next/font/google";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      action=""
      className="flex w-[calc(100vw-64px)] flex-col gap-8 md:w-[702px]"
    >
      <TextareaAutosize
        autoFocus
        spellCheck={false}
        maxLength={1000}
        placeholder="Type here..."
        onChange={(e) => setUserInput(e.target.value)}
        className={cn(
          `${inter.className} h-full w-full resize-none rounded-none
border-[1px] border-black p-3 outline-none`
        )}
      />
      <div className="flex items-center justify-end gap-12 font-light">
        <p>
          <span>{userInput.length}</span>
          <span>{" / "}</span>
          <span>1000</span>
        </p>
        <button className="bg-black px-2 py-1 font-medium text-white">
          Submit
        </button>
      </div>
    </form>
  );
};
