import { createClient } from "@/libs/supabase/server";

export const Comments = async () => {
  const supabase = await createClient();
  const { data: comments } = await supabase.from("comments").select();

  if (!comments) {
    return null;
  }

  console.log(comments);

  return (
    <section>
      <ul>
        {comments.map(({ id, user_input, created_at }) => {
          return <li key={id}>{user_input}</li>;
        })}
      </ul>
    </section>
  );
};
