  import { Inter } from "next/font/google";
  import "./globals.css";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import SessionWrapper from "./SessionWrapper/page";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata = {
    title: "Get Me A Chai",
    description: "Get me a chai is a crowd funding app made for developers",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <SessionWrapper >
            <Navbar />
            <div className="text-white fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
            {children}
            <Footer />
          </SessionWrapper>
        </body>
      </html>
    );
  }
