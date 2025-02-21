"use server";

import { createClient } from "@/server/supabase";

export const connectDB = async () => {
  const supabase = await createClient();
  const { data: instruments } = await supabase
    .from("instruments")
    .select();
};
