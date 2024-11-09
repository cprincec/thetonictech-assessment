import Image from "next/image";

import BlogImg1 from "@/public/blog_1.png";
import BlogImg2 from "@/public/blog_2.png";
import BlogImg3 from "@/public/blog_3.png";
import BlogAvatar1 from "@/public/blog_avatar_1.png";
import BlogAvatar2 from "@/public/blog_avatar_2.png";
import BlogAvatar3 from "@/public/blog_avatar_3.png";
import Link from "next/link";

const Blog = () => {
    return (
        <section className="grid p-4 md:my-36 lg:max-w-[80%] m-auto">
            <h2 className="text-xl text-tertiary text-center">Our Blog</h2>
            <h3 className="py-6 text-3xl md:text-5xl lg:leading-[72px] text-center">
                Value proposition accelerator product management venture
            </h3>

            <div className="py-8 grid gap-12 md:grid-cols-3 md:gap-6">
                <div className="grid gap-4 hover:shadow-[0px_4px_32px_0px_#00000014] hover:scale-[1.01] md:p-2 rounded-xl transition-all duration-300">
                    <Image
                        src={BlogImg1}
                        alt="person walking"
                        width={300}
                        height={200}
                        className="md:-mb-8"
                    />
                    <span className="flex items-center gap-4">
                        <p className="font-bold">Category</p>
                        <p className="text-tertiary md:text-xs xl:text-base">November 22, 2021</p>
                    </span>
                    <h4 className="text-xl">Pitch termsheet backing validation focus release.</h4>
                    <div className="flex items-center gap-2">
                        <Image src={BlogAvatar1} alt="Chandler Bing" width={30} height={30} />
                        <h5>Chandler Bing</h5>
                    </div>
                </div>

                <div className="grid gap-4 hover:shadow-[0px_4px_32px_0px_#00000014] hover:scale-[1.01] md:p-2 rounded-xl transition-all duration-300">
                    <Image src={BlogImg2} alt="person on phone" width={300} height={200} />
                    <span className="flex items-center gap-4">
                        <p className="font-bold">Category</p>
                        <p className="text-tertiary md:text-xs xl:text-base">November 22, 2021</p>
                    </span>
                    <h4 className="text-xl">
                        Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
                    </h4>
                    <div className="flex items-center gap-2">
                        <Image src={BlogAvatar2} alt="Chandler Bing" width={30} height={30} />
                        <h5>Rachel Green</h5>
                    </div>
                </div>

                <div className="grid gap-4 hover:shadow-[0px_4px_32px_0px_#00000014] hover:scale-[1.01] md:p-2 rounded-xl transition-all duration-300">
                    <Image
                        src={BlogImg3}
                        alt="person and papers"
                        width={300}
                        height={200}
                        className="md:-mb-4"
                    />
                    <span className="flex items-center gap-4">
                        <p className="font-bold">Category</p>
                        <p className="text-tertiary md:text-xs xl:text-base">November 22, 2021</p>
                    </span>
                    <h4 className="text-xl">
                        Beta prototype sales iPad gen-z marketing network effects value proposition
                    </h4>
                    <div className="flex items-center gap-2">
                        <Image src={BlogAvatar3} alt="Monica Geller" width={30} height={30} />
                        <h5>Monica Geller</h5>
                    </div>
                </div>
            </div>

            <Link
                href={"#"}
                className="my-6 px-10 md:px-14 py-2 md:py-4 font-bold justify-self-center rounded-full md:text-xl hover:text-white border-2 border-primary hover:bg-primary transition-all duration-300 cursor-pointer"
            >
                Load more
            </Link>
        </section>
    );
};
export default Blog;
