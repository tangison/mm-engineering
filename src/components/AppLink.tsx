import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function AppLink({ prefetch = false, children, ...rest }: AppLinkProps) {
  return (
    <Link prefetch={prefetch} {...rest}>
      {children}
    </Link>
  );
}
