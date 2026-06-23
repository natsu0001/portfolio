import { cn } from "@/lib/utils";

export default function DotBackground() {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 -z-20",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(rgba(184,134,11,0.35)_1px,transparent_1px)]"
        )}
      />

      <div className="fixed inset-0 -z-10 pointer-events-none bg-black/50" />
    </>
  );
}