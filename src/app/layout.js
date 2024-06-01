import { Heebo, Yantramanav } from "next/font/google";
import "./globals.css";
import '../styles/styles.scss'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const heebo = Heebo({ weight: ['300', '700'],  subsets: ["latin"] });
const yantramanav = Yantramanav({ weight: '700',  subsets: ["latin"] });

export const metadata = {
  title: "Kropp Fitness",
  description: "Kropp Fitness Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
