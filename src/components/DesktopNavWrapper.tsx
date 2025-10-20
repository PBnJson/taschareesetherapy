import { DesktopNav } from "./DesktopNav";

export function DesktopNavWrapper() {
  return (
    <div className="hidden md:block">
      <DesktopNav />
    </div>
  );
}
