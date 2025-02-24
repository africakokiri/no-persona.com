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

import { useState } from "react";

export const Modal = ({ userInput }: { userInput: string }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e: boolean) => {
    if (e && userInput.length > 0) {
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
        className="rounded-md bg-black px-2 py-1 font-light text-white"
      >
        Submit
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-2">
              <p className="leading-7">
                This action cannot be undone. This action cannot be undone.
                This will permanently be posted unless you delete it
                yourself.
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
            className="bg-red-500 text-white hover:bg-red-400
hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
