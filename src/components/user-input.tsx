"use client";

import { cn } from "@/libs/shadcn/utils";

import { Inter } from "next/font/google";
import { type FormEvent, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

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
        ref={textareaRef}
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
      <div
        className="flex items-end justify-end gap-4 md:flex-row md:gap-8"
      >
        <div
          className="flex min-w-fit gap-2 border-[1px] border-black px-3
py-1"
        >
          <span className="min-w-[40px] max-w-[40px] text-right">
            {userInput.length}
          </span>
          <span>{"/"}</span>
          <span className="min-w-[40px] max-w-[40px]">1000</span>
        </div>
        <input
          type="password"
          ref={inputRef}
          value={password}
          maxLength={15}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password here."
          className={cn(
            `w-full rounded-none border-[1px] border-black px-3 py-1
outline-none md:block md:w-[200px]`,
            password.length < 6 && "border-red-500",
            password.length === 0 && "border-black"
          )}
        />
        <button className="hidden bg-black px-3 py-1 text-white md:block">
          submit
        </button>
      </div>
      <button className="bg-black px-3 py-1 text-white md:hidden">
        submit
      </button>
    </form>
  );
};
