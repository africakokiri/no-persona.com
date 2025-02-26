// import { getComments } from "@/libs/supabase/handle-comments";
import { comments } from "@/mock/comments";

export const Comments = async () => {
  // const comments = await getComments();

  if (!comments) {
    return null;
  }

  return (
    <ul className="space-y-8">
      {comments
        .sort((a, b) => {
          if (a.created_at > b.created_at) return -1;
          if (a.created_at < b.created_at) return 1;

          return 0;
        })
        .map(({ id, comment, created_at }) => {
          const date = new Date(created_at);

          const formattedTime = date.toLocaleString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });

          return (
            <li
              key={id}
              className="w-full space-y-2 rounded-md border-[1px]
border-black bg-white p-4"
            >
              <p>{comment}</p>
              <p className="text-right text-sm font-light">
                {formattedTime}
              </p>
            </li>
          );
        })}
    </ul>
  );
};
