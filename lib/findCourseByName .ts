import { courses } from "@/data";

export const findCourseByName = async (name: string) => {
   return courses.find((course) => course.name === name);
};

// Example usage
const courseName = "Computer Hardware";
const course = findCourseByName(courseName);

if (course) {
   console.log("Course found:", course);
} else {
   console.log("Course not found.");
}
