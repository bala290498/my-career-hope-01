import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "MyCareerHope - Learn Today. Build Experience. Launch Your Career.",
  description: "Live IT training from industry professionals, real-world projects, career mentorship, and India's first platform with Dynamic Group Pricing.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${caveat.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
