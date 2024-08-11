"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  path: string;
};

export const NavbarItem = ({ label, path }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={cn(
        "text-sm font-semibold text-muted-foreground transition-all duration-75 hover:text-black hover:animate-bounce hover:border-b border-black",
        isActive && "text-black border-b"
      )}
      >
          {label}
    </Link>
  );
};
