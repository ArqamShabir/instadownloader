import { cn } from "@/lib/utils";

type AdSlotProps = {
  label: string;
  size?: string;
  description?: string;
  className?: string;
};

export function AdSlot({ label, size, description, className }: AdSlotProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200/70 bg-blue-50/70 p-6 text-center text-sm font-medium text-blue-700 shadow-inner transition-colors dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-100",
        className,
      )}
      role="complementary"
      aria-label={`Ad placement: ${label}`}
    >
      <span className="text-xs uppercase tracking-wide text-blue-500 dark:text-blue-200">
        {label}
      </span>
      {size ? (
        <span className="mt-2 text-base font-semibold text-blue-900 dark:text-blue-100">
          {size}
        </span>
      ) : null}
      {description ? (
        <span className="mt-2 text-xs text-blue-600/80 dark:text-blue-100/70">
          {description}
        </span>
      ) : null}
    </div>
  );
}
