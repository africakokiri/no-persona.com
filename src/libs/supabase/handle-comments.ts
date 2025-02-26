"use server";

import { createClient } from "@/libs/supabase/server";

export const createComment = async (formData: FormData) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from("comments")
    .insert({
      comment: formData.get("comment"),
      password: formData.get("password")
    })
    .select();

  if (error) throw error;
};

export const getComments = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("comments").select();

  if (error) throw error;

  return data;
};
