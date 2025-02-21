"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      action=""
      className={`${inter.className} w-full px-4 md:w-[800px]`}
    >
      <TextareaAutosize
        maxRows={10}
        autoFocus
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        maxLength={1000}
        placeholder="Type here..."
        spellCheck={false}
        className="w-full resize-none border-[1px] border-black p-3
outline-none"
      />
      <div className="flex items-center justify-end gap-4 md:gap-8">
        <div className="flex min-w-[80px] gap-2">
          <p className="min-w-[40px] text-right">{userInput.length}</p>
          <span>{"/"}</span>
          <span>1000</span>
        </div>
        <button className="bg-black px-3 py-1 text-white">submit</button>
      </div>
    </form>
  );
};
