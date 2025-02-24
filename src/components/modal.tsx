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
import { v4 as uuidv4 } from "uuid";

const UuidAlert = () => {
  return (
    <div
      className="flex items-center justify-between rounded-md border-[1px]
border-black/20 p-2"
    >
      <p className="text-black">{uuidv4()}</p>
      <button className="rounded-md bg-black px-2 py-1 text-white">
        copy
      </button>
    </div>
  );
};

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
              <div className="space-y-2">
                <UuidAlert />
                <p className="leading-7">
                  This action cannot be undone. This will permanently post
                  your comment.
                  <br />
                  <span
                    className="text-red-500 underline underline-offset-4"
                  >
                    To delete the comment, you need the code above.
                  </span>
                </p>
              </div>
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
