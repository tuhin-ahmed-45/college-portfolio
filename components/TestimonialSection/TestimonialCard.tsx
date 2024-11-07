"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "../ui/card-stack";
export function TestimonialCard() {
   return (
      <div className="w-[40rem] flex items-center justify-center h-full">
         <CardStack items={CARDS} />
      </div>
   );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   return (
      <span
         className={cn(
            "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
            className
         )}
      >
         {children}
      </span>
   );
};

const CARDS = [
   {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
         <p>
            I joined the Computer Hardware and Software course with limited
            knowledge, and now{" "}
            <Highlight>
               {" "}
               I feel confident handling hardware components configurations!{" "}
            </Highlight>{" "}
            The hands-on labs were incredibly helpful, and I loved how the
            course made complex topics easy to understand
         </p>
      ),
   },
   {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
         <p>
            <Highlight>This course exceeded my expectations!</Highlight> The
            instructors explained everything from basic components to more
            advanced troubleshooting techniques. Whether you’re new to computers
            or looking to sharpen your skills, this course has something for
            everyone
         </p>
      ),
   },
   {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
         <p>
            I’ve taken a few online courses, but this one stands out because of
            its focus on real-world applications. Learning about hardware
            installation, software troubleshooting, and system optimization has
            given me skills I can use in daily life and my career
         </p>
      ),
   },
];
