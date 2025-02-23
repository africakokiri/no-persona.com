import { PageTitle } from "@/components/page-title";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center
gap-8"
    >
      <PageTitle />
      <UserInput />
    </div>
  );
}
