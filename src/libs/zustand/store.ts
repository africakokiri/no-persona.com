import { create } from "zustand";

interface UserInputData {
  inputData: {
    date: Date;
    userInput: string;
    password: string;
  }[];
  addInputData: (date: Date, userInput: string, password: string) => void;
}

export const useUserInputDataStore = create<UserInputData>((set) => ({
  inputData: [],

  addInputData: (date, userInput, password) =>
    set((state) => ({
      inputData: [
        ...state.inputData,
        {
          date,
          userInput,
          password
        }
      ]
    }))
}));
