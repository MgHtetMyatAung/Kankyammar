import NavMenu from "@/components/NavMenu";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LOVE AND DESTINY",
  description: "ပိုချစ်လေလေ ပိုနာကျင်ရလေလေ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
