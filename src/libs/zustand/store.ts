import { create } from "zustand";

interface NewCommentStore {
  newComments: {
    comment?: string;
    password?: string;
    created_at?: string;
  }[];
  addNewComment: (comment: string, password: string) => void;
}

export const useNewCommentStore = create<NewCommentStore>((set) => ({
  newComments: [],
  addNewComment: (comment, password) =>
    set((state) => ({
      newComments: [
        ...state.newComments,
        {
          comment,
          password,
          created_at: new Date().toISOString()
        }
      ]
    }))
}));
