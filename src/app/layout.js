import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata = {
  title: "Nexus",
  description: "One-stop platform for your healthcare needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} h-full`}>{children}</body>
    </html>
  );
}
