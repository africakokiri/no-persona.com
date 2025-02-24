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

export const SubmitModalBtn = ({ userInput }: { userInput: string }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e: boolean) => {
    if (e && userInput.length > 0) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  return (
    <>
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
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete
              your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
