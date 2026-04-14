import { Utils } from "@/lib";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={Utils.cn("section-shell", className)}>{children}</div>;
}
