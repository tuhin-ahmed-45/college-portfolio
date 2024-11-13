import { PinContainer } from "@/components/ui/3d-pin";
import { findCourseByName } from "@/lib/findCourseByName ";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type PageProps = {
   params: Promise<{ name: string }>;
};

const CoursePage: FC<PageProps> = async ({ params }) => {
   const awaitedParams = await params;
   const courseName = decodeURIComponent(awaitedParams.name);
   const course = await findCourseByName(courseName);

   if (!course) {
      return (
         <div className="min-h-screen flex items-center justify-center text-white">
            Course not found
         </div>
      );
   }

   return (
      <main className="min-h-screen bg-black-100 text-white p-10">
         <section className="text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500">
               Course Details
            </h1>
         </section>

         <section className="flex justify-between mt-20 px-10">
            {/* Course Info */}
            <div className="max-w-3xl text-left">
               <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                  {course.name} Crash Course
               </h2>
               <p className="mb-4 text-lg">{course.des}</p>
               <ul className="space-y-2 text-gray-200">
                  {course.details?.map((detail, index) => (
                     <li key={index} className="flex items-center gap-2">
                        <span>⭐</span>
                        <span>{detail}</span>
                     </li>
                  ))}
               </ul>
               <p className="mt-4 text-gray-100 text-base">
                  ⌛ Period : <span>{course?.period}</span>
               </p>
               <p className="mt-8 text-gray-100 text-base">
                  👨🏼‍🏫 Instructor : <span>{course?.instructor}</span>
               </p>
               <button className="relative mt-7 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                     {" "}
                     Enroll Fee :
                     <span className="ml-1 font-bold">${course.price}</span>
                  </span>
               </button>
            </div>

            {/* Course Image */}
            <div className="w-[330px] flex flex-col items-center p-4">
               <PinContainer title={course.title}>
                  <Link href={`/course/${course.name}`}>
                     <div className="flex flex-col w-[370px] h-full gap-4">
                        <div className="w-full h-[200px] overflow-hidden rounded-md">
                           <Image
                              src={course.img}
                              width={370}
                              height={200}
                              alt="course image"
                              className="object-cover w-full h-full"
                           />
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 ">
                           {course.name}
                        </h3>
                        <p className="text-base font-normal text-slate-500 ">
                           {course.des}
                        </p>
                     </div>
                  </Link>
               </PinContainer>
            </div>
         </section>
      </main>
   );
};

export default CoursePage;
