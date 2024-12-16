import { Inter } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
// import ToasterContext from "../components/ToasterContext";
import Provider from "../components/Provider";
// import Provider from "@app/components/Provider";
import { ReactNode } from "react";
import ToasterContext from "../components/ToasterContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIResumeWala",
  description: "Next resume builder",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-2`}>
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
