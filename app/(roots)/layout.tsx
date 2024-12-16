import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "../components/Provider";
import { ReactNode } from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume Builder",
  description: "A Next.js 14 Resume Builder ",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-2`}>
        <Provider>
          <Topbar />

          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
