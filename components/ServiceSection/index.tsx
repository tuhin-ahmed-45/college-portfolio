import { services } from "@/data";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
   return (
      <section
         id="service"
         className="flex flex-col items-center justify-center gap-6 min-h-screen"
      >
         <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 bg-opacity-50">
            Our Services
         </h1>
         <div className="grid grid-cols-3 gap-20 mt-10">
            {services?.map((service) => (
               <ServiceCard service={service} key={service?.id} />
            ))}
         </div>
      </section>
   );
}
