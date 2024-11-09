"use client";
import Image from "next/image";

import Logo from "@/public/Logo.svg";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "./CloseIcon";
import HamburgerIcon from "./Hamburger";

const MobileHeader = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setMenuIsOpen((prevvalue: boolean) => !prevvalue);
    };
    return (
        <header className="flex md:hidden items-center justify-between py-2">
            <Image src={Logo} alt="logo" width={150} height={60} />
            <span className="relative" onClick={handleToggleMenu}>
                {menuIsOpen ? <CloseIcon /> : <HamburgerIcon />}
            </span>

            {!!menuIsOpen && (
                <ul className="absolute top-24 right-0 left-0 bg-primary grid justify-center text-center gap-4 items-center mx-6 p-4 border border-white rounded-lg">
                    <li>
                        <Link href={"#"}>Product</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Services</Link>
                    </li>
                    <li>
                        <Link href={"#"}>About</Link>
                    </li>
                    <li className="bg-white rounded-full px-6 py-1 text-black font-bold">
                        <Link href={"#"}>Log In</Link>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default MobileHeader;
