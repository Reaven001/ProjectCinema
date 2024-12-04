import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

//Components
import NavbarDesk from "@/components/Navbar/NavbarDesk";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

export const metadata: Metadata = {
  title: "Project Cinema",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarDesk />
          {children}
      </body>
    </html>
  );
}
