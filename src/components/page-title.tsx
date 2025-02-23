import { DarkmodeSwitch } from "@/app/darkmode-switch";

import Image from "next/image";

export const PageTitle = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/icons/kokiri.svg"
          alt=""
          width={128}
          height={128}
          className="dark:invert"
        />
      </div>
      <DarkmodeSwitch />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-light">kokiri.social</h1>
        <p className="text-lg font-light">
          Tell me anything you wanna say!
        </p>
      </div>
    </header>
  );
};
