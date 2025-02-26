"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="width-layout flex flex-col gap-4"
    >
      <TextareaAutosize
        autoFocus
        spellCheck={false}
        maxLength={1000}
        value={comment}
        placeholder="Type here..."
        onChange={(e) => setComment(e.target.value)}
        className={`${inter.className} h-[50px] w-full resize-none
rounded-md border-[1px] border-black p-3 outline-none transition-colors
duration-300`}
      />
      <div className="flex flex-col items-end gap-4 font-light md:flex-row">
        <div className="flex w-full items-center justify-between">
          <p>
            <span>{comment.length}</span>
            <span>{" / "}</span>
            <span>1000</span>
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the password."
            maxLength={16}
            className={`${inter.className} w-[200px] rounded-md
border-[1px] border-black px-3 py-1 outline-none transition-colors
duration-300`}
          />
        </div>
        <button
          className="rounded-md bg-black px-2 py-1 font-[400] text-white
transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
