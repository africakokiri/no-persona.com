import { getComments } from "@/libs/supabase/handle-comments";

export const Comments = async () => {
  const comments = await getComments();

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
