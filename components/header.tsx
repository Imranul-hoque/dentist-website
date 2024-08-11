"use client";

import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { MobileMenu } from "./navbar/mobile-menu";

export const Header = () => {
    return (
        <div className="w-full fixed top-0 left-0 right-0 h-16 flex items-center shadow-md border-b z-50 bg-white px-6">
            <div className="w-full h-full flex items-center gap-x-3">
                <Logo />
                <div className="ml-auto md:pt-5">
                    <Navbar />
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}