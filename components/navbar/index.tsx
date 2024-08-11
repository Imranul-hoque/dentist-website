"use client"

import { Route, routes } from "@/constants"
import { NavbarItem } from "./navbar-item"

export const Navbar = () => {
    return (
        <div className="hidden md:flex items-center gap-x-3">
            {
                routes.map((route: Route, index: number) => (
                    <NavbarItem 
                        key={index}
                        path={route.path}
                        label={route.label}
                    />
                ))
            }
        </div>
    )
}