"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // kept for API compatibility (not used here)
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    { className, activeClassName, pendingClassName: _pending, href, ...props },
    ref,
  ) => {
    const pathname = usePathname();

    const isActive =
      typeof href === "string"
        ? pathname === href
        : pathname === href.pathname;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };