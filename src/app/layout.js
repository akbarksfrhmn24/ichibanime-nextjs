import Navbar from "./components/Utilities/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ichibanime",
  description: "Streaming anime website online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="">
          <Navbar />
        </h1>
        {children}
      </body>
    </html>
  );
}
