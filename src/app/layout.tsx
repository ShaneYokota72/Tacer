import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PostHogProvider } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tacer",
  description: "One click job application tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " tracking-wide min-h-screen flex flex-col"}>
        <meta name="google-site-verification" content="kN2G5y4OfVNDr8v-n4fd24FnY6VLbJj-ztA2Lxog9Uo" />
        <meta name="google-site-verification" content="M6xnCTTx4TmaijZzxhfdE5swfB9hPX1lijL0OMv6-Zs" />
        <Navbar />
        <main className="flex-grow">
          <PostHogProvider>
            {children}
          </PostHogProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
