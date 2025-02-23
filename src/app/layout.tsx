import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kokiri",
  description: "Write down everything you wanna say.",
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
    <html lang="ko">
      <body className="h-screen w-screen antialiased">
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
