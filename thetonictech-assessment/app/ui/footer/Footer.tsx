"use client";
import Image from "next/image";
import Link from "next/link";
import LogoVariant from "@/public/Logo_2.svg";

const Footer = () => {
    return (
        <footer className="p-4 text-tertiary lg:max-w-[95%] m-auto">
            {/* Subscribe starts here */}
            <div className="bg-primary text-white mb-40">
                <div className="bg-[url('/arc.png')] bg-[length:70%_45%] md:bg-[length:50%_70%] bg-no-repeat bg-right-top">
                    <section className="px-6 py-12 lg:max-w-[75%] xl:max-w-[64%] m-auto">
                        <h2 className="text-4xl md:text-5xl text-center leading-[48px] md:leading-[72px]">
                            An enterprise template to ramp up your company website
                        </h2>
                        <form className="mt-10 grid gap-6 md:grid md:grid-cols-[2fr_1fr] md:px-14">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email address"
                                className="px-4 md:px-6 py-4 md:py-4 rounded-full text-xl text-primary"
                            />
                            <button className="px-4 md:px-6 py-4 md:py-4 rounded-full text-xl font-bold text-primary hover:text-secondary bg-secondary border-2 border-secondary hover:bg-primary transition-all duration-300 cursor-pointer">
                                Start now
                            </button>
                        </form>
                    </section>
                </div>
            </div>
            {/* Subscribe ends here */}

            <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 lg:gap-28 md:mb-32">
                <div className="grid gap-6">
                    <Image src={LogoVariant} alt="Logo" width={200} height={100} />
                    <p>
                        Social media validation business model canvas graphical user interface launch party
                        creative facebook iPad twitter.
                    </p>
                    <p>All rights reserved.</p>
                </div>

                <div className="grid gap-10 md:grid-cols-3">
                    <div className="grid gap-4 text-xl">
                        <h3 className="text-primary font-bold">Landings</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Home</Link>
                            </li>
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Products</Link>
                            </li>
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Services</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid gap-4 text-xl">
                        <h3 className="text-primary font-bold">Company</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Home</Link>
                            </li>
                            <li className="flex gap-2 items-center hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Careers</Link>
                                <p className="text-sm font-bold bg-secondary text-primary px-6 py-2 rounded-3xl">
                                    Hiring!
                                </p>
                            </li>
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Services</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid gap-4 text-xl">
                        <h3 className="text-primary font-bold">Resources</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Blog</Link>
                            </li>
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Products</Link>
                            </li>
                            <li className="hover:text-secondary transition-colors duration-300 cursor-pointer">
                                <Link href={"#"}>Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
