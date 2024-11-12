import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
   return (
      <section id="contact" className="bg-black-100 py-12 min-h-screen">
         <div className="">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-500 bg-opacity-50 mb-10">
               Contact Us
            </h2>

            <div className="grid md:grid-cols-3 gap-28 justify-center items-center">
               {/* Contact Info */}
               <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center space-x-2">
                     <FaMapMarkerAlt className="text-gray-500 font-semibold text-xl" />
                     <span className="text-gray-500 font-semibold">
                        Signboard, Narayanganj
                     </span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <FaPhoneAlt className="text-gray-500 font-semibold text-xl" />
                     <span className="text-gray-500 font-semibold">
                        +880 1xxxxxxxx
                     </span>
                  </div>
                  <div className="flex items-center space-x-3">
                     <FaEnvelope className="text-gray-500 font-semibold text-xl" />
                     <span className="text-gray-500 font-semibold">
                        contact@ppi.com
                     </span>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="md:col-span-2 bg-black-100 rounded-lg shadow-lg p-6">
                  <form>
                     <div className="mb-4">
                        <label
                           htmlFor="name"
                           className="block text-gray-600 font-semibold mb-1"
                        >
                           Name
                        </label>
                        <input
                           type="text"
                           id="name"
                           className="w-full px-4 py-2 border rounded-lg bg-black text-white"
                           placeholder="Your Name"
                           required
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="email"
                           className="block text-gray-600 font-semibold mb-1"
                        >
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           className="w-full px-4 py-2 border rounded-lg bg-black text-white"
                           placeholder="Your Email"
                           required
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="message"
                           className="block text-gray-600 font-semibold mb-1"
                        >
                           Message
                        </label>
                        <textarea
                           id="message"
                           className="w-full px-4 py-2 border rounded-lg bg-black text-white"
                           placeholder="Your Message"
                           rows={4}
                           required
                        ></textarea>
                     </div>
                     <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                           Send Message
                        </span>
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
