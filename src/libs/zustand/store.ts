import { create } from "zustand";

interface UserInputData {
  inputData: {
    date: Date;
    userInput?: string;
    password?: string;
  }[];
  addUserInput: (date: Date, userInput: string) => void;
  addPassword: (date: Date, password: string) => void;
}

export const useUserInputDataStore = create<UserInputData>((set) => ({
  inputData: [],

  addUserInput: (date, userInput) =>
    set((state) => ({
      inputData: [
        ...state.inputData,
        {
          date,
          userInput
        }
      ]
    })),

  addPassword: (date, password) =>
    set((state) => ({
      inputData: [
        ...state.inputData,
        {
          date,
          password
        }
      ]
    }))
}));
