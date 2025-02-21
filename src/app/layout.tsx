import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Confession",
  icons: {
    icon: "/icons/kokiri.svg"
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
        className={`${robotoMono.className} h-screen w-screen bg-white
text-black antialiased dark:bg-black dark:text-white`}
      >
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
