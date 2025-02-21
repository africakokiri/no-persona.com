"use client";

import { cn } from "@/libs/shadcn/utils";

import { Inter } from "next/font/google";
import { type FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    // Onsubmit refresh 방지
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${inter.className} flex w-full flex-col items-end gap-4
px-4 md:w-[800px] md:gap-8`}
    >
      <TextareaAutosize
        maxRows={10}
        autoFocus
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        maxLength={1000}
        placeholder="Type here."
        spellCheck={false}
        className={cn(
          `h-[50px] w-full resize-none rounded-none border-[1px]
border-black p-3 outline-none`,
          userInput.length < 5 && "border-red-500",
          userInput.length === 0 && "border-black"
        )}
      />
      <div className="flex items-end justify-end gap-4 md:gap-8">
        <p
          className="flex min-w-fit gap-2 border-[1px] border-black px-3
py-1"
        >
          <span className="min-w-[40px] max-w-[40px] text-right">
            {userInput.length}
          </span>
          <span>{"/"}</span>
          <span className="min-w-[40px] max-w-[40px]">1000</span>
        </p>
        <button className="bg-black px-3 py-1 text-white md:block">
          submit
        </button>
      </div>
    </form>
  );
};
