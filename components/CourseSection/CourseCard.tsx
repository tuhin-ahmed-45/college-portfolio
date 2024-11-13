import Image from "next/image";
import Link from "next/link";
import { PinContainer } from "../ui/3d-pin";

interface Course {
   id: number;
   title: string;
   name: string;
   img: string;
   des: string;
   details: string[];
   instructor: string;
   period: string;
   price: string;
}

interface Props {
   course: Course;
}

export default function CourseCard({ course }: Props) {
   return (
      <div
         key={course?.id}
         className="w-[330px] flex flex-col items-center justify-center p-2"
      >
         <PinContainer title={course?.title}>
            <Link href={`/course/${course?.name}`}>
               <div className="flex flex-col w-[370px] h-full p-4 gap-2">
                  <div className="w-[350px] h-[200px] overflow-hidden rounded-md">
                     <Image
                        src={course.img}
                        width={350}
                        height={200}
                        alt="course image"
                        className="object-cover w-full h-full"
                     />
                  </div>
                  <h3 className="max-w-xs m-1 font-bold text-xl text-slate-100">
                     {course?.name}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                     <span className="text-slate-500">{course?.des}</span>
                  </div>
                  <div className="mt-2">
                     <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                           <span className="ml-1 font-bold">Enroll now</span>
                        </span>
                     </button>
                  </div>
               </div>
            </Link>
         </PinContainer>
      </div>
   );
}
