"use client";

import { SubmitModal } from "@/components/modal";
import { cn } from "@/libs/shadcn/utils";

import { Inter } from "next/font/google";
import { type FormEvent, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const textareaRef = useRef(null);
  const passwordRef = useRef(null);

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
        ref={textareaRef}
        spellCheck={false}
        maxLength={1000}
        value={userInput}
        placeholder="Type here..."
        onChange={(e) => setUserInput(e.target.value)}
        className={cn(
          `${inter.className} h-[50px] w-full resize-none rounded-md
border-[1px] border-black p-3 outline-none transition-colors duration-300`,
          userInput.length < 4 && "bg-red-100",
          userInput.length === 0 && "bg-white"
        )}
      />
      <div className="flex flex-col items-end gap-4 font-light md:gap-8">
        <div className="flex w-full items-center justify-between">
          <p>
            <span>{userInput.length}</span>
            <span>{" / "}</span>
            <span>1000</span>
          </p>
          <input
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the password."
            maxLength={16}
            className={cn(
              `${inter.className} w-[200px] rounded-md border-[1px]
border-black px-3 py-1 outline-none transition-colors duration-300`,
              userInput.length > 0 && "bg-red-100",
              (password.length === 0 || password.length >= 4) &&
                "bg-white",
              userInput.length > 0 && password.length === 0 && "bg-red-100"
            )}
          />
        </div>
        <SubmitModal
          userInput={userInput}
          password={password}
          userInputRef={textareaRef}
          passwordRef={passwordRef}
        />
      </div>
    </form>
  );
};
