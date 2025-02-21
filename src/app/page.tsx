import Image from "next/image";

export default function page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/icons/kokiri.svg"
          alt=""
          width={128}
          height={128}
        />
        <p>Kokiri.social</p>
      </div>
      <form action=""></form>
    </div>
  );
}
