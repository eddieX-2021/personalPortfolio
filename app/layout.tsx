import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eddie Xiao - Portfolio",
  description: "Full-stack Developer & AI/ML Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}