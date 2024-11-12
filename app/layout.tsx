import Footer from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   variable: "--font-poppins",
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
         <body className={`${poppins.variable} font-poppins antialiased`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
