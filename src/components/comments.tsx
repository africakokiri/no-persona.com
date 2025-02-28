"use client";

import { getComments } from "@/libs/supabase/handle-comments";
import { useNewCommentStore } from "@/libs/zustand/store";

import { useEffect, useState } from "react";

interface Comments {
  comment: string;
  password: string;
  created_at: string;
}

export const Comments = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const { newComments } = useNewCommentStore();

  useEffect(() => {
    (async () => {
      const res = await getComments();

      if (newComments.length > 0) {
        setComments([...res.slice(0, res.length - 1), ...newComments]);
      } else {
        setComments([...res, ...newComments]);
      }
    })();
  }, [newComments]);

  return (
    <ul className="space-y-8">
      {comments
        .sort((a, b) => {
          if (a.created_at > b.created_at) return -1;
          if (a.created_at < b.created_at) return 1;

          return 0;
        })
        .map(({ comment, created_at }) => {
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
              className="w-full space-y-2 rounded-md border-[1px]
border-black bg-white p-4"
            >
              <p>{comment}</p>
              <p className="text-right text-sm font-light">
                {formattedTime}
              </p>
            </li>
          );
        })}
    </ul>
  );
};
