import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "next-themes";
import CustomCursor from "../components/ui/customcursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oliver Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistMono.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CustomCursor />
            <Navbar />
            <main className="flex-grow overflow-auto">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
