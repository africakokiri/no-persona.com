"use client";

import { cn } from "@/libs/shadcn/utils";
import { createComment } from "@/libs/supabase/handle-comments";

import { Inter } from "next/font/google";
import { type FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [initInput, setInitInput] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    setInitInput(true);

    if (comment.length < 4 || password.length < 4) {
      e.preventDefault();
    }

    setComment("");
    setPassword("");
  };

  return (
    <form
      action={createComment}
      onSubmit={(e) => handleSubmit(e)}
      className="width-layout flex flex-col gap-4"
    >
      <TextareaAutosize
        name="comment"
        autoFocus
        spellCheck={false}
        maxLength={1000}
        value={comment}
        placeholder="Type here..."
        onChange={(e) => setComment(e.target.value)}
        className={cn(
          `${inter.className} h-[50px] w-full resize-none rounded-md
border-[1px] border-black p-3 outline-none transition-colors duration-300`,
          initInput && comment.length < 4 && "bg-red-200",
          initInput && comment.length >= 4 && "bg-white"
        )}
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
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the password."
            maxLength={16}
            className={cn(
              `${inter.className} w-[200px] rounded-md border-[1px]
border-black px-3 py-1 outline-none transition-colors duration-300`,
              initInput && password.length < 4 && "bg-red-200",
              initInput && password.length >= 4 && "bg-white"
            )}
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
