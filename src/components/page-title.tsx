import Image from "next/image";

export const PageTitle = () => {
  return (
    <header className="flex flex-col items-center justify-center">
      <Image
        src="/icons/kokiri.svg"
        alt=""
        width={128}
        height={128}
      />
      <h1>kokiri.social</h1>
      <p>Tell me anything you wanna say!</p>
    </header>
  );
};
