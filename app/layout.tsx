import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// start
export const metadata: Metadata = {
  title: "Shaheen Amjed | Full-Stack Developer",
  description:
    "Shaheen Amjed is a passionate full-stack web developer specializing in modern backend technologies, API development, and performance-driven applications. Explore my portfolio, open-source contributions, and development blog.",
  keywords: [
    "Shaheen Amjed",
    "Full Stack Developer",
    "Backend Developer",
    "Python Developer",
    "Node.js",
    "REST API",
    "Open Source",
    "Web Development",
    "Freelancer",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Shaheen Amjed", url: "https://shaheen-amjed.vercel.app" }],
  creator: "Shaheen Amjed",
  publisher: "Shaheen Amjed",
  metadataBase: new URL("https://shaheen-amjed.vercel.app"),
  openGraph: {
    title: "Shaheen Amjed | Full-Stack Developer",
    description:
      "Explore the work and skills of Shaheen Amjed, a backend-focused full-stack developer with a passion for building efficient APIs and contributing to open source.",
    url: "https://shaheen-amjed.vercel.app",
    siteName: "Shaheen Amjed Portfolio",
    images: [
      {
        url: "https://shaheen-amjed.vercel.app/github.webp",
        width: 1200,
        height: 630,
        alt: "Shaheen Amjed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/github-pfp.webp",
    shortcut: "/github-pfp.webp",
    apple: "/github-pfp.webp",
  },
};

// end
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
