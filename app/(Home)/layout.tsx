import { Header } from "@/components/Layout/Header";
import React from "react";

export default function HomeLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <main className="">
         <Header />
         {children}
      </main>
   );
}
