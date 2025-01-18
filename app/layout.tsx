import "./globals.css";
import {GoogleAnalytics} from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import type {Metadata} from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL ("http://locahost:3000"),
  title:{
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト"
  },
  description:
  "「Next.js+ヘッドレスCMSではじめる！かんたん.モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "「Next.js+ヘッドレスCMSではじめる！かんたん.モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-XXX"/>
      <GoogleTagManager gtmId="GTM-XXX"/>
    </html>
  );
}
