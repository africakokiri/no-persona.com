"use client";

import { SubmitModal } from "@/components/modal";

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
        className={`${inter.className} h-full w-full resize-none rounded-md
border-[1px] border-black p-3 outline-none`}
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
            placeholder="Enter the password."
            maxLength={16}
            className={`${inter.className} w-[200px] rounded-md
border-[1px] border-black px-3 py-1 outline-none`}
          />
        </div>
        <SubmitModal userInput={userInput} />
      </div>
    </form>
  );
};
