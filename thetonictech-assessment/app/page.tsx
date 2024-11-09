"use client";
import Image from "next/image";
import Link from "next/link";

import HeroGraphics from "@/public/hero_graphics.svg";
import MobileHeader from "./ui/header/MobileHeader";
import Testimonials from "./ui/testimonials/Testimonials";
import DesktopHeader from "./ui/header/DesktopHeader";
import Services from "./ui/services/Services";
import FAQS from "./ui/faqs/Faqs";
import Blog from "./ui/blog/Blog";
import Marquee from "./ui/header/Marquee";
import Footer from "./ui/footer/Footer";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <main className="">
                {/* Banner starts here */}
                <div className="bg-[#0A2640] relative overflow-hidden">
                    <div className="px-4 md:px-10 py-6 md:py-2 pb-12 lg:pb-20 bg-[url('/arc.png')] bg-[length:48%_38%] bg-no-repeat bg-right-top md:bg-[length:55%_65%]">
                        {/* Header starts here */}
                        <MobileHeader />
                        <DesktopHeader />
                        {/* Header ends here */}

                        <div className="md:grid grid-cols-2 items-center mt-10 space-y-10 md:gap-x-10 lg:gap-x-18">
                            <section className="space-y-6">
                                <h1 className="text-4xl md:text-5xl md:leading-[72px] font-medium md:font-normal">
                                    Save time by building fast with Boldo Template
                                </h1>
                                <p className="text-sm md:leading-[28px]">
                                    Funding handshake buyer business-to-business metrics iPad partnership.
                                    First mover advantage innovator success deployment non-disclosure.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Link
                                        href={"#"}
                                        className="bg-secondary text-primary font-bold text-center p-3 md:px-2 md:py-2 xl:px-14 xl:py-4 rounded-3xl border-2 border-secondary hover:bg-primary hover:text-secondary transition-all duration-300"
                                    >
                                        Buy template
                                    </Link>
                                    <Link
                                        href={"#"}
                                        className="text-white hover:text-primary font-bold text-center hover:bg-white p-3 md:px-2 md:py-2 xl:px-14 xl:py-4 rounded-3xl border-2 border-white transition-all duration-300"
                                    >
                                        Explore
                                    </Link>
                                </div>
                            </section>
                            <Image
                                src={HeroGraphics}
                                alt="Stat Image"
                                width={480}
                                height={500}
                                className="ml-auto mb-20"
                            />
                        </div>
                        <Marquee />
                    </div>
                </div>
                {/* Banner ends here */}

                <div className="text-black py-16">
                    {/* Services Starts here */}
                    <Services />
                    {/* Services ends here */}

                    {/* Testimonial Starts here */}
                    <Testimonials />
                    {/* Testimonial ends here */}

                    {/* FAQ */}
                    <FAQS />
                    {/* FAQ */}

                    {/* Our Blog starts here */}
                    <Blog />
                    {/* Our Blog ends here */}
                </div>
            </main>
            {/* Footer starts here */}
            <Footer />
            {/* Footer ends here */}
        </div>
    );
}
