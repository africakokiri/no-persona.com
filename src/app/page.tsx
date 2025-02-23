import { DarkmodeSwitch } from "@/app/darkmode-switch";
import { PageTitle } from "@/components/page-title";

export default function page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <DarkmodeSwitch className="fixed left-8 top-8" />
      <PageTitle />
    </div>
  );
}
