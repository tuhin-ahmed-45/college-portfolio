"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialCard() {
   return (
      <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
         <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
         />
      </div>
   );
}

const testimonials = [
   {
      quote: " I joined the Computer Hardware and Software course with limitedknowledge, and now I feel confident handling hardware components configurations! The hands-on labs were incredibly helpful, and I loved how the course made complex topics easy to understand",
      name: "Farhan",
      title: "A Tale of Two Cities",
   },
   {
      quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
   },
   {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
   },
   {
      quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
   },
   {
      quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
   },
];

// const CARDS = [
//    {
//       id: 0,
//       name: "Manu Arora",
//       designation: "Senior Software Engineer",
//       content: (
//          <p>
//             I joined the Computer Hardware and Software course with limited
//             knowledge, and now{" "}
//             <Highlight>
//                {" "}
//                I feel confident handling hardware components configurations!{" "}
//             </Highlight>{" "}
//             The hands-on labs were incredibly helpful, and I loved how the
//             course made complex topics easy to understand
//          </p>
//       ),
//    },
//    {
//       id: 1,
//       name: "Elon Musk",
//       designation: "Senior Shitposter",
//       content: (
//          <p>
//             <Highlight>This course exceeded my expectations!</Highlight> The
//             instructors explained everything from basic components to more
//             advanced troubleshooting techniques. Whether you’re new to computers
//             or looking to sharpen your skills, this course has something for
//             everyone
//          </p>
//       ),
//    },
//    {
//       id: 2,
//       name: "Tyler Durden",
//       designation: "Manager Project Mayhem",
//       content: (
//          <p>
//             I’ve taken a few online courses, but this one stands out because of
//             its focus on real-world applications. Learning about hardware
//             installation, software troubleshooting, and system optimization has
//             given me skills I can use in daily life and my career
//          </p>
//       ),
//    },
// ];
