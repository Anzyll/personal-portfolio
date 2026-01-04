import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Muhammed Anzil M",
  description:
    "Full-Stack developer specializing in React.js, Springboot, and Scalable Web Applications.",
  openGraph: {
    title: "Muhammed Anzil M | Full-Stack Developer",
    description:
      "Full-Stack developer specializing in React.js, Springboot, and Scalable Web Applications.",
    url: "https://example.com/", // Placeholder
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Assuming local or updated image
        width: 1200,
        height: 630,
        alt: "Muhammed Anzil M | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    { name: "Muhammed Anzil M", url: "https://example.com/" },
  ],
  keywords: [
    "Muhammed Anzil M",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Springboot",
    "Java",
    "PostgreSQL",
    "Web Development",
  ],
  creator: "Muhammed Anzil M",
  publisher: "Muhammed Anzil M",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden dark:bg-[#0b0a09]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-white dark:bg-black mx-auto pt-6 sm:pt-12 w-full md:w-3/4 lg:w-3/5 text-foreground">
            {children}
          </div>
        </ThemeProvider>

        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
