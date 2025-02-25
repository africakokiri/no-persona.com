"use client";

import { createComment } from "@/libs/supabase/comments";
import { useUserInputDataStore } from "@/libs/zustand/store";

import { useEffect } from "react";

export const Comments = () => {
  const { inputData } = useUserInputDataStore();

  useEffect(() => {
    const lastIndexInputData = inputData[inputData.length - 1];

    (async () => {
      await createComment(lastIndexInputData);
    })();
  }, [inputData]);

  return (
    <section>
      <ul></ul>
    </section>
  );
};
