import { StaticImageData } from "next/image";

export type FAQItem = {
    question: string;
    answer: string;
  }

  export type Testimonial = {
    name:string;
    quote: string;
    position: string;
    image: StaticImageData;
  }