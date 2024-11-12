import { TestimonialCard } from "./TestimonialCard";

export default function TestimonialSection() {
   return (
      <section
         id="testimonial"
         className="flex flex-col items-center justify-center gap-5 min-h-screen"
      >
         <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 bg-opacity-50">
            Testimonials
         </h1>

         <TestimonialCard />
      </section>
   );
}
