"use server";

import { createClient } from "@/libs/supabase/server";

export const createComment = async (comment: string, password: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("comments")
    .insert({
      comment,
      password
    })
    .select();

  if (error) throw error;

  return data;
};

export const getComments = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").select();

  if (error) throw error;

  return data;
};
