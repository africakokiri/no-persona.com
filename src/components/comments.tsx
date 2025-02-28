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
import {
  deleteComment,
  getComments
} from "@/libs/supabase/handle-comments";
import { useNewCommentStore } from "@/libs/zustand/store";

import { useEffect, useState } from "react";

interface Comments {
  comment: string;
  password: string;
  created_at: string;
}

export const Comments = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [password, setPassword] = useState("");
  const { newComments } = useNewCommentStore();

  useEffect(() => {
    (async () => {
      const res = await getComments();

      if (newComments.length > 0) {
        setComments([
          ...res.slice(0, res.length - newComments.length),
          ...newComments
        ]);
      } else {
        setComments([...res, ...newComments]);
      }
    })();
  }, [newComments]);

  const handleContinueButton = async (comment: string) => {
    const data = await deleteComment(comment, password);

    if (data.length !== 0) {
      const targetComment = comments.find(
        (dbComment) =>
          dbComment.comment === comment && dbComment.password === password
      );

      setComments(comments.filter((item) => item !== targetComment));
    }
  };

  return (
    <>
      <ul className="space-y-8">
        {comments.map(({ comment, created_at }) => {
          const date = new Date(created_at);

          const formattedTime = date.toLocaleString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });

          return (
            <li
              key={created_at}
              className="w-full space-y-4 rounded-md border-[1px]
border-black bg-white p-4"
            >
              <p>{comment}</p>
              <p className="flex justify-between text-right text-sm">
                <AlertDialog onOpenChange={() => setPassword("")}>
                  <AlertDialogTrigger className="text-red-500">
                    Delete
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader className="space-y-4">
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription asChild>
                        <input
                          type="password"
                          placeholder="Enter the password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          maxLength={16}
                          className="w-full rounded-md border-[1px]
border-black px-3 py-2 text-black"
                        />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleContinueButton(comment)}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <span className="font-light">{formattedTime}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
