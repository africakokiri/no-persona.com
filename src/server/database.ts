"use server";

import { createClient } from "@/server/supabase";

export const connectSupabase = async (
  userInput: string,
  password: string
) => {
  console.log(userInput, password);

  const supabase = await createClient();
  const { data: instruments } = await supabase
    .from("instruments")
    .select();
};
