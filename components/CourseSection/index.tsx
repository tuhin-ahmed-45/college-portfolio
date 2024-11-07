import { courses } from "@/data";
import CourseCard from "./CourseCard";

export default function CourseSection() {
   return (
      <section
         id="course"
         className="flex flex-col items-center justify-center gap-6 min-h-screen"
      >
         <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 bg-opacity-50">
            Our Courses
         </h1>
         <div className="grid grid-cols-3 gap-24 mt-24">
            {courses?.map((course) => (
               <CourseCard course={course} key={course.id} />
            ))}
         </div>
      </section>
   );
}
