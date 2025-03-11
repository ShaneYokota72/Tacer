import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { PostHogProvider } from './providers'
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tacer",
  description: "Tacer landing page. One Click Job Application Tracker!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Tacer</title>
        <meta property="og:title" content="Tacer" />
        <meta property="og:description" content="Tacer landing page. One Click Job Application Tracker!" />
        <meta property="og:image" content="https://tacer.vercel.app/WebsiteThumbnail.png" />
        <meta property="og:url" content="https://tacer.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className + " tracking-wide min-h-screen flex flex-col"}>
        <meta name="google-site-verification" content="kN2G5y4OfVNDr8v-n4fd24FnY6VLbJj-ztA2Lxog9Uo" />
        <meta name="google-site-verification" content="M6xnCTTx4TmaijZzxhfdE5swfB9hPX1lijL0OMv6-Zs" />
        <main className="flex-grow bg-subtle">
          <PostHogProvider>
            {children}
          </PostHogProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
