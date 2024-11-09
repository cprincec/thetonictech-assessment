"use client";
import { FAQItem } from "@/app/lib/types";
import Image from "next/image";
import ChevronDown from "@/public/chevron-down.svg";
import { useRef } from "react";

export const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="w-full mx-auto bg-white rounded-lg overflow-hidden">{children}</div>;
};

export const AccordionItem: React.FC<{
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-[#c4c4c4] w-full">
            <button
                className="flex justify-between items-center w-full py-4 pl-6 text-left focus:outline-none"
                onClick={onToggle}
            >
                <span>{item.question}</span>
                {isOpen ? (
                    <div className="bg-primary rounded-full mt-1 rotate-180">
                        <Image src={ChevronDown} alt="arrow down" width={30} height={30} />
                    </div>
                ) : (
                    <div className="bg-primary rounded-full mt-1">
                        <Image src={ChevronDown} alt="arrow down" width={30} height={30} />
                    </div>
                )}
            </button>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-max-height duration-300 ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
                }}
            >
                <div className="px-6 pb-4">
                    <p className="text-tertiary text-left">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};
