import Image from "next/image";
import Logo from "@/public/Logo.svg";
import Link from "next/link";

const DesktopHeader = () => {
    return (
        <header className="hidden md:flex items-center justify-between mt-10">
            <Image src={Logo} alt="logo" width={163} height={42} />

            <ul className="flex text-center gap-4 items-center justify-end font-semibold">
                <li>
                    <Link
                        href={"#"}
                        className="px-2 block hover:text-secondary transition-all duration-200 cursor-pointer"
                    >
                        Product
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className="px-2 block hover:text-secondary transition-all duration-200 cursor-pointer"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#"}
                        className="px-2 block hover:text-secondary transition-all duration-200 cursor-pointer"
                    >
                        About
                    </Link>
                </li>
                <li className="bg-white rounded-full px-6 md:px-10 py-1 md:py-2 text-black font-bold hover:bg-primary hover:text-secondary transition-all duration-500 cursor-pointer">
                    <Link href={"#"}>Log In</Link>
                </li>
            </ul>
        </header>
    );
};

export default DesktopHeader;
