import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider",
        {
          "bg-background-elevated text-foreground-muted border border-border":
            variant === "default",
          "bg-accent/10 text-accent border border-accent/20": variant === "accent",
          "bg-success/10 text-success border border-success/20": variant === "success",
          "bg-amber-500/10 text-amber-500 border border-amber-500/20":
            variant === "warning",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
