"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export function Header({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const navItems = [
      {
         name: "Home",
         link: "/",
      },
      {
         name: "Course",
         link: "#course",
      },
      {
         name: "Service",
         link: "#service",
      },
      {
         name: "Testimonial",
         link: "#testimonial",
      },
      {
         name: "Contact",
         link: "#contact",
      },
   ];
   return (
      <div className="relative  w-full">
         <FloatingNav navItems={navItems} />
         {children}
      </div>
   );
}
