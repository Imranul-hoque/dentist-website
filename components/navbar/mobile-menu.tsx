"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Route, routes } from "@/constants";
import { Menu } from "lucide-react";
import { NavbarItem } from "./navbar-item";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="block md:hidden w-6 h-6" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-3">
          {routes.map((route: Route, index: number) => (
            <NavbarItem key={index} label={route.label} path={route.path} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
