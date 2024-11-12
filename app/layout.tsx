import Footer from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Poppins } from "@next/font/google";
import type { Metadata } from "next";
import "./globals.css";
// const geistSans = localFont({
//    src: "./fonts/GeistVF.woff",
//    variable: "--font-geist-sans",
//    weight: "100 900",
// });
// const geistMono = localFont({
//    src: "./fonts/GeistMonoVF.woff",
//    variable: "--font-geist-mono",
//    weight: "100 900",
// });

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400"], // Only one weight as a test
   style: ["normal"], // Only normal style as a test
});

export const metadata: Metadata = {
   title: "Modern PPI Portfolio",
   description: "Modern PPI Portfolio by Code Hub Team",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${poppins.className} antialiased sans-serif`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
