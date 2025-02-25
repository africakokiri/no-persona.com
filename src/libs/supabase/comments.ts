"use server";

import { createClient } from "@/libs/supabase/server";

const supabase = await createClient();

export const createComment = async (data: {
  userInput: string;
  password: string;
}) => {
  const { data: newComment, error } = await supabase
    .from("comments")
    .insert(data)
    .select();

  if (error) throw error;

  return newComment;
};

export const getComments = async () => {
  const { data, error } = await supabase.from("comments").select();

  if (error) throw error;

  return data;
};
