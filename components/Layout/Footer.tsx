import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="bg-black text-white py-6">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            {/* Copyright */}
            <div className="mt-4 text-center">
               © {new Date().getFullYear()} Code Hub. All rights reserved.
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
               <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-xl hover:text-gray-400"
               >
                  <FaFacebook />
               </Link>
               <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-xl hover:text-gray-400"
               >
                  <FaTwitter />
               </Link>
               <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="text-xl hover:text-gray-400"
               >
                  <FaLinkedin />
               </Link>
               <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-xl hover:text-gray-400"
               >
                  <FaInstagram />
               </Link>
            </div>
         </div>
      </footer>
   );
}
