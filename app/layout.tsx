import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";

const mainFont = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Xphix Spotify Clone",
  description: "An awesome clone of spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Sidebar>Sidebar</Sidebar>
        {children}
      </body>
    </html>
  );
}
