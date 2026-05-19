import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varun-garg.dev"),
  title: {
    default: "Varun Garg | Full-Stack & AI Engineer",
    template: "%s | Varun Garg"
  },
  description:
    "Portfolio of Varun Garg, a full-stack engineer at Oracle Financial Services building stress testing analytics, GenAI automation, Java APIs, SQL optimization, and RAG tools.",
  keywords: [
    "Varun Garg",
    "Full-stack engineer",
    "AI engineer",
    "Oracle Financial Services",
    "React",
    "Next.js",
    "Java",
    "Python",
    "GenAI",
    "RAG",
    "Vector databases"
  ],
  authors: [{ name: "Varun Garg" }],
  creator: "Varun Garg",
  openGraph: {
    title: "Varun Garg | Full-Stack & AI Engineer",
    description:
      "Full-stack and AI engineer building financial analytics platforms, GenAI automation, and RAG-powered products.",
    url: "https://varun-garg.dev",
    siteName: "Varun Garg Portfolio",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Garg | Full-Stack & AI Engineer",
    description:
      "Portfolio of Varun Garg: Oracle STSA, GenAI workflows, Java APIs, SQL optimization, and RAG tools."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
