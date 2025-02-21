"use client";

import { Inter } from "next/font/google";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export const UserInput = () => {
  return (
    <form
      action=""
      className={`${inter.className} w-full px-4 md:w-[800px]`}
    >
      <TextareaAutosize
        maxRows={10}
        autoFocus
        placeholder="Type here..."
        spellCheck={false}
        className="w-full resize-none border-[1px] border-black p-3
outline-none"
      />
    </form>
  );
};
