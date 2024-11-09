"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/public/arrow-left.svg";
import ArrowRight from "@/public/arrow-right.svg";

import { testimonialsData } from "@/app/lib/data";
import { Testimonial } from "@/app/lib/types";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData || []);

    const handleNext = () => {
        const testimonialsCopy = [...testimonials];

        const currentTestimonial = testimonialsCopy.pop();

        if (currentTestimonial) {
            testimonialsCopy.unshift(currentTestimonial);
            setTestimonials(testimonialsCopy);
        }
    };

    const handlePrev = () => {
        const testimonialsCopy = [...testimonials];

        const currentTestimonial = testimonialsCopy.shift();

        if (currentTestimonial) {
            testimonialsCopy.push(currentTestimonial);
            setTestimonials(testimonialsCopy);
        }
    };

    return (
        <section className="bg-primary text-white my-20 md:my-36 lg:my-48 px-8 xl:px-28 py-20">
            <div className="grid md:grid-cols-[8fr_3fr] gap-6 md:mb-8 md:py-6">
                <h3 className="text-3xl md:text-5xl md:leading-[72px] self-start">
                    An enterprise template to ramp up your company website
                </h3>

                {/* Navigation buttons starts here */}
                <div className="justify-self-end flex gap-4 my-4 self-end">
                    <button
                        onClick={handlePrev}
                        className="bg-white rounded-full px-3 py-2 flex items-center"
                    >
                        <Image src={ArrowLeft} alt="arrow left" width={46} height={46} className="mt-1" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white rounded-full px-3 py-2 flex items-center"
                    >
                        <Image src={ArrowRight} alt="arrow right" width={46} height={46} className="mb-1" />
                    </button>
                </div>
                {/* Navigation buttons ends here */}
            </div>

            {/* Testimonial cards starts here */}
            <div className={`py-6 flex gap-6 overflow-x-scroll md:overflow-hidden`} aria-label="Testimonials">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        id={testimonial.name}
                        className="bg-white rounded-xl text-primary p-8 h-min flex-1 min-w-full lg:min-w-0 grid gap-6"
                    >
                        <h4 className="text-xl md:text-2xl leading-[36px]">{testimonial.quote}</h4>
                        <div className="flex items-center gap-4">
                            <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} />
                            <div>
                                <h5 className="text-base leading-[32px] font-bold">{testimonial.name}</h5>
                                <p className="text-sm leading-[32px] text-tertiary">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Testimonial cards ends here */}
        </section>
    );
};

export default Testimonials;
