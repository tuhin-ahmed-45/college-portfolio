import { Spotlight } from "../ui/Spotlight";

export default function HeroSection() {
   return (
      <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black-100 antialiased bg-grid-white/[0.02] relative overflow-hidden">
         <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
         />
         <div className=" p-4 max-w-7xl flex flex-col gap-6 items-center mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-3xl uppercase md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 bg-opacity-50">
               Park Polytechnic Institute
            </h1>
            <p className="mt-4 w-4/6 font-normal text-lg text-neutral-300 text-center mx-auto">
               Park Polytechnic Institute is a premier technical education
               institution, dedicated to nurturing skilled professionals in
               various engineering and technological fields. Known for its
               hands-on learning approach, the institute offers a dynamic
               curriculum that blends academic excellence with practical
               experience.
            </p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full mt-4 p-[1px]">
               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
               <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Let&apos;s connected
               </span>
            </button>
         </div>
      </div>
   );
}
