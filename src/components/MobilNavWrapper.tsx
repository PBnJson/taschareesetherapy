import { MobilNav } from "./MobilNav";

export function MobilNavWrapper() {
  return (
    <div className="md:hidden">
      <MobilNav />
    </div>
  );
}
