import { create } from "zustand";

interface NewCommentStore {
  comments: {
    id?: number;
    comment: string;
    password: string;
    create_at?: string;
  }[];
  addNewComment: (comment: string, password: string) => void;
}

export const useNewCommentStore = create<NewCommentStore>((set) => ({
  comments: [],
  addNewComment: (comment, password) =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          comment,
          password
        }
      ]
    }))
}));
