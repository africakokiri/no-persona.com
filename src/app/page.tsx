import { Comments } from "@/components/comments";
import { PageTitle } from "@/components/page-title";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center
justify-center"
    >
      <div className="absolute space-y-8">
        <PageTitle />
        <UserInput />
      </div>
    </div>
  );
}
