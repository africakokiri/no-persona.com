import { v4 as uuidv4 } from "uuid";

export const AlertUuid = () => {
  return (
    <div
      className="flex items-center justify-between rounded-md border-[1px]
border-black/20 p-2"
    >
      <p className="text-black">{uuidv4()}</p>
      <button className="rounded-md bg-black px-2 py-1 text-white">
        copy
      </button>
    </div>
  );
};
