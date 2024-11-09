"use client";

import Image from "next/image";
import officeWithPeople from "@/public/connect_banner.png";
import { faqs } from "@/app/lib/data";
import { Accordion, AccordionItem } from "./Accordion";
import { useState } from "react";

const FAQS = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    //
    return (
        <section className="p-4 grid gap-8 lg:max-w-[80%] m-auto">
            <Image src={officeWithPeople} alt="Office with people" width={1000} height={300} />
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <h2 className="text-2xl md:text-4xl leading-[32px] md:leading-[56px]">
                    We connect our customers with the best, and help them keep up-and stay open.
                </h2>
                <Accordion>
                    {faqs?.map((faq, index) => (
                        <div
                            key={index}
                            className="text-lg md:text-xl flex justify-between items-center gap-4 py-2"
                        >
                            <AccordionItem
                                item={faq}
                                isOpen={openIndex === index}
                                onToggle={() => handleItemToggle(index)}
                            />
                        </div>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQS;
