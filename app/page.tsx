import ContactSection from "@/components/ContactSection";
import CourseSection from "@/components/CourseSection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
   return (
      <main className="relative bg-black-100 flex items-center justify-center flex-col mx-auto overflow-hidden sm:px-10 px-5">
         <HeroSection />
         <CourseSection />
         <ServiceSection />
         <TestimonialSection />
         <ContactSection />
      </main>
   );
}
