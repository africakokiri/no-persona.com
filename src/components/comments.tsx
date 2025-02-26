// import { getComments } from "@/libs/supabase/handle-comments";

const comments = [
  {
    id: 13,
    comment: "1234",
    password: "1234",
    created_at: "2025-02-25T04:04:08.143245+00:00"
  },
  {
    id: 22,
    comment: "1234",
    password: "1234",
    created_at: "2025-02-25T23:07:31.330323+00:00"
  },
  {
    id: 23,
    comment: "test",
    password: "test",
    created_at: "2025-02-25T23:08:21.723272+00:00"
  },
  {
    id: 29,
    comment: "Test comment",
    password: "1234",
    created_at: "2025-02-25T23:19:51.084659+00:00"
  },
  {
    id: 40,
    comment: "3113",
    password: "3113",
    created_at: "2025-02-25T23:51:48.027767+00:00"
  },
  {
    id: 41,
    comment: "zxcv",
    password: "zxcv",
    created_at: "2025-02-25T23:52:30.871974+00:00"
  },
  {
    id: 50,
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi commodi doloribus eligendi non accusantium minima ipsa sit. Dolor saepe sunt, quibusdam ducimus voluptate suscipit commodi cum praesentium beatae molestias aliquid.",
    password: "1234",
    created_at: "2025-02-27T23:52:30.871974+00:00"
  }
];

export const Comments = async () => {
  // const comments = await getComments();

  if (!comments) {
    return null;
  }

  return (
    <ul className="space-y-8">
      {comments.map(({ id, comment, created_at }) => {
        return (
          <li
            key={id}
            className="w-full space-y-2 rounded-md border-[1px]
border-black bg-white p-4"
          >
            <p>{comment}</p>
            <p className="text-right text-sm font-light">{created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};
