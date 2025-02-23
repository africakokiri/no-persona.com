import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "No persona",
  description: "Tell me whatever you want.",
  icons: {
    icon: "/icons/square.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} h-screen w-screen antialiased
dark:bg-[#171717] dark:text-white`}
      >
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
