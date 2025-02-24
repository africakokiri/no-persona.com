"use client";

import { SubmitModalBtn } from "@/components/modal";
import { cn } from "@/libs/shadcn/utils";

import { Inter } from "next/font/google";
import { type FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");

  const handleFormOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleFormOnSubmit(e)}
      className="flex w-[calc(100vw-64px)] flex-col gap-4 md:w-[702px]
md:gap-8"
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
      <div
        className="flex items-center justify-end gap-8 font-light
md:gap-12"
      >
        <p>
          <span>{userInput.length}</span>
          <span>{" / "}</span>
          <span>1000</span>
        </p>
        <SubmitModalBtn />
      </div>
    </form>
  );
};
