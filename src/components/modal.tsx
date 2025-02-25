"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { cn } from "@/libs/shadcn/utils";
import { createComment } from "@/libs/supabase/comments";

import { type Dispatch, type SetStateAction, useState } from "react";

export const SubmitModal = ({
  userInput,
  password,
  setUserInput,
  setPassword
}: {
  userInput: string;
  password: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e: boolean) => {
    if (e && userInput.length >= 4) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  const handleContinueButton = async () => {
    setUserInput("");
    setPassword("");

    const user_input = userInput;

    await createComment({ user_input, password });
    // addInputData(userInput, password);
  };

  return (
    <AlertDialog
      open={openModal}
      onOpenChange={(e) => handleModal(e)}
    >
      <AlertDialogTrigger
        className={cn(
          `rounded-md bg-black px-2 py-1 font-[400] text-white
transition-colors duration-300`,
          (userInput.length < 4 || password.length < 4) && "bg-red-400",
          userInput.length === 0 && password.length === 0 && "bg-black",
          userInput.length >= 4 &&
            password.length >= 4 &&
            "bg-green-400 text-black"
        )}
      >
        Submit
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-2">
              <p className="leading-7">
                This action cannot be undone. This will permanently be
                posted unless you delete it yourself.
                <br />
                <span className="text-red-400 underline underline-offset-4">
                  To delete the comment, you need to enter the password.
                </span>
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-red-400 font-[400] text-white hover:bg-red-300
hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleContinueButton}
            className="bg-green-500 font-[400] text-black
hover:bg-green-400"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
