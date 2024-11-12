import Link from "next/link";
export function Header() {
   const navItems = [
      {
         id: 1,
         name: "Home",
         link: "/",
      },
      {
         id: 2,
         name: "Course",
         link: "#course",
      },
      {
         id: 3,
         name: "Service",
         link: "#service",
      },
      {
         id: 4,
         name: "Testimonial",
         link: "#testimonial",
      },
      {
         id: 5,
         name: "Contact",
         link: "#contact",
      },
   ];
   return (
      <header className="fixed top-0 left-0 w-full text-white shadow-md z-50">
         <nav className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-5 items-center justify-center space-x-4">
            {navItems?.map((item) => (
               <Link key={item.id} href={item?.link}>
                  {item?.name}
               </Link>
            ))}
         </nav>
      </header>
   );
}
