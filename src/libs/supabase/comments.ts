"use server";

import { createClient } from "@/libs/supabase/server";

export const createComment = async ({
  user_input,
  password
}: {
  user_input: string;
  password: string;
}) => {
  const supabase = await createClient();

  const { data: newComment, error } = await supabase
    .from("comments")
    .insert({
      user_input,
      password
    })
    .select();

  if (error) throw error;

  return newComment;
};

export const getComments = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").select();

  if (error) throw error;

  return data;
};
