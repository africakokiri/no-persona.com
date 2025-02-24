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
import { handleFormEvent } from "@/server/handle-form-event";

import { useState } from "react";

export const SubmitModal = ({
  userInput,
  password
}: {
  userInput: string;
  password: string;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e: boolean) => {
    if (e && userInput.length > 4) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
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
          (userInput.length < 4 || password.length < 4) && "bg-red-500",
          userInput.length === 0 && password.length === 0 && "bg-black",
          userInput.length >= 4 &&
            password.length >= 4 &&
            "bg-green-500 text-black"
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
                <span className="text-red-500 underline underline-offset-4">
                  To delete the comment, you need to enter the password.
                </span>
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-red-500 font-[400] text-white hover:bg-red-400
hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleFormEvent(userInput, password)}
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
