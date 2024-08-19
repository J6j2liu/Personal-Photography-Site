import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import "./globals.css";

const inter = Expletus_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website",
  description: "Website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
