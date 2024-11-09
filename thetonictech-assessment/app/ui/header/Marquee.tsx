import LogoWall from "@/public/Logo Wall.svg";
import Image from "next/image";

const Marquee = () => {
    return (
        <div className="mt-6 md:mt-14 grid grid-flow-col auto-cols-[1fr] w-max overflow-hidden animate-scroll">
            <div className="relative min-w-[1200px] h-6 md:h-12">
                <Image src={LogoWall} alt="logo wall" fill objectFit="cover" className="mb-12" />
            </div>
            <div className="relative min-w-[1200px] h-6 md:h-12">
                <Image src={LogoWall} alt="logo wall" fill objectFit="cover" className="mb-12" />
            </div>
        </div>
    );
};
export default Marquee;
