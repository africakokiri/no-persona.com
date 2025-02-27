import { Comments } from "@/components/comments";
import { PageTitle } from "@/components/page-title";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div
      className="width-layout relative my-16 flex min-h-fit flex-col
items-center space-y-16 md:my-32"
    >
      <div className="space-y-4">
        <PageTitle />
        <UserInput />
      </div>
      <Comments />
    </div>
  );
}
