import Image from "next/image";
import Link from "next/link";

import PersonWalking from "@/public/our_services_1.png";
import PeopleShaking from "@/public/our_services_2.png";
import PersonSitting from "@/public/our_services_3.png";
import ManOnPhone from "@/public/our_services_4.png";
import WomanOnPhone from "@/public/our_services_5.png";
import ArrowRight from "@/public/arrow-right.svg";

import Check from "@/public/check.svg";
import Feather from "@/public/feather.svg";
import Eye from "@/public/eye.svg";
import Sun from "@/public/sun.svg";

const Services = () => {
    return (
        <div className="px-4 md:pt-20 lg:w-[80%] m-auto">
            <h2 className="text-center text-tertiary text-xl mb-4">Our Services</h2>
            <h3 className="text-center text-3xl md:text-5xl leading-[40px] md:leading-[72px]">
                Handshake infographic mass market crowdfunding iteration.
            </h3>
            <div className="mt-10 md:flex md:gap-14 lg:gap-18 items-center">
                <div className="space-y-4 md:mt-10 grid">
                    <Image src={PersonWalking} alt="Person Walking" width={500} height={300} />
                    <h4 className="text-2xl">Cool feature title</h4>
                    <p className="text-tertiary text-xl">
                        Learning curve network effects return on investment.
                    </p>
                    <Link
                        href={"#"}
                        className="flex gap-2 border-b-2 border-primary pb-2 w-max text-primary hover:border-b-secondary transition-all duration-200 text-xl font-bold"
                    >
                        <p>Explore page</p>
                        <Image src={ArrowRight} alt="arrow right" width={25} height={25} />
                    </Link>
                </div>

                <div className="mt-10 space-y-4 grid">
                    <Image src={PeopleShaking} alt="People Shaking" width={500} height={300} />
                    <h4 className="text-2xl">Even cooler feature</h4>
                    <p className="text-tertiary text-xl">
                        Learning curve network effects return on investment.
                    </p>
                    <Link
                        href={"#"}
                        className="flex gap-2 border-b-2 border-primary pb-2 w-max text-primary text-xl font-bold hover:border-b-secondary transition-all duration-300"
                    >
                        Explore page
                        <Image src={ArrowRight} alt="arrow right" width={20} height={20} />
                    </Link>
                </div>

                <div className="mt-10 space-y-4 grid">
                    <Image src={PersonSitting} alt="Person Sitting" width={500} height={300} />
                    <h4 className="text-2xl">Cool feature title</h4>
                    <p className="text-tertiary text-xl">
                        Learning curve network effects return on investment.
                    </p>
                    <Link
                        href={"#"}
                        className="flex gap-2 border-b-2 border-primary pb-2 w-max text-primary text-xl font-bold hover:border-b-secondary transition-all duration-300"
                    >
                        Explore page
                        <Image src={ArrowRight} alt="arrow right" width={20} height={20} />
                    </Link>
                </div>
            </div>

            <section className="my-28 md:mt-36 lg:mt-56 md:grid md:grid-cols-2 md:gap-24 md:items-center">
                <Image src={ManOnPhone} alt="person on phone" width={500} height={600} />

                <div className="grid md:flex md:flex-col md:gap-4">
                    <h4 className="text-2xl md:text-4xl lg:leading-[56px] text-center md:text-left py-4">
                        We Connect our customers with the best, and help them keep up-and stay open.
                    </h4>

                    <div className="space-y-4 mb-6">
                        <div className="flex gap-2 items-center">
                            <div className="relative bg-primary rounded-full font-medium w-6 h-6 lg:w-8 lg:h-8">
                                <Image src={Check} alt="check" fill sizes="100%" className="p-1" />
                            </div>
                            <p className="md:text-xl">We connect our customers with the best.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative bg-primary rounded-full font-medium w-6 h-6 lg:w-8 lg:h-8">
                                <Image src={Check} alt="check" fill sizes="100%" className="p-1" />
                            </div>
                            <p className="md:text-xl">Advisor success customer launch party.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative bg-primary rounded-full font-medium w-6 h-6 lg:w-8 lg:h-8">
                                <Image src={Check} alt="check" fill sizes="100%" className="p-1" />
                            </div>
                            <p className="md:text-xl">Business-to-customer long tail.</p>
                        </div>
                    </div>

                    <Link
                        href={"#"}
                        className="bg-primary hover:bg-white border-2 border-primary font-bold text-white hover:text-primary rounded-full p-3 md:px-14 md:py-4 text-center md:self-start transition-all duration-300"
                    >
                        Start now
                    </Link>
                </div>
            </section>

            <section className="md:grid md:grid-cols-2 md:gap-24 md:items-center">
                <Image
                    src={WomanOnPhone}
                    alt="woman on phone"
                    width={500}
                    height={600}
                    className="md:col-start-2"
                />

                <div className="md:row-start-1 md:-mt-8">
                    <h4 className="text-2xl md:text-4xl lg:leading-[56px] text-center md:text-left py-4">
                        We connect our customers with the best, and help them keep up-and stay open.
                    </h4>

                    <div className="grid gap-6 my-6">
                        <div className="flex items-center gap-2 bg-primary pl-4 py-2 text-sm md:text-lg text-white shadow-[0px_4px_32px_0px_#00000014]">
                            <Image src={Feather} alt="feather icon" width={28} height={28} />
                            <p className="">We connect our customers with the best.</p>
                        </div>
                        <div className="flex items-center gap-2 pl-4 py-2 text-sm md:text-lg shadow-[0px_4px_32px_0px_#00000014]">
                            <Image src={Eye} alt="Eye icon" width={28} height={28} />
                            <p>Advisor success customer launch party.</p>
                        </div>
                        <div className="flex items-center gap-2 pl-4 py-2 text-sm md:text-lg shadow-[0px_4px_32px_0px_#00000014]">
                            <Image src={Sun} alt="sun icon" width={28} height={28} />
                            <p>Business-to-customer long tail.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
