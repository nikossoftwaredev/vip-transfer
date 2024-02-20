import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="halloween">
      <body className="bg-transparent min-h-screen h-screen flex flex-col">
        <Header />
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
