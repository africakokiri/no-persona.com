"use client";

import { useUserInputDataStore } from "@/libs/zustand/store";

import { useEffect } from "react";

export const Comments = () => {
  const { inputData } = useUserInputDataStore();

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  return (
    <section>
      <ul></ul>
    </section>
  );
};
