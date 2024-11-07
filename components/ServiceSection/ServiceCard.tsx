"use client";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

interface Service {
   id: number;
   title: string;
   img: string;
   des: string;
}

interface Props {
   service: Service;
}

export default function ServiceCard({ service }: Props) {
   return (
      <div>
         <BackgroundGradient className="rounded-[22px] w-[330px] h-[23rem] flex flex-col items-center justify-center p-2 sm:p-10 bg-white dark:bg-zinc-900">
            <Image src={service?.img} width={64} height={64} alt="nope" />
            <p className="text-2xl font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
               {service.title}
            </p>
            <p className="font-normal text-neutral-600 dark:text-neutral-400">
               {service.des}
            </p>
         </BackgroundGradient>
      </div>
   );
}
