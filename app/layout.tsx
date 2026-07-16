import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Nkundimana Augustin",
    template: "%s | Nkundimana Augustin",
  },

  description:
    "AI Researcher | Agricultural Engineer | Founder & CEO of AGRIC AI. Building Artificial Intelligence solutions for agriculture, climate innovation, and food security in Africa.",

  keywords: [
    "Nkundimana Augustin",
    "AGRIC AI",
    "Artificial Intelligence",
    "Agricultural Engineer",
    "AI Researcher",
    "Machine Learning",
    "Computer Vision",
    "Climate Innovation",
    "Precision Agriculture",
    "Food Security",
    "Africa",
  ],

  authors: [
    {
      name: "Nkundimana Augustin",
    },
  ],

  creator: "Nkundimana Augustin",

  metadataBase: new URL("https://augustin.agric-ai.com"),

  openGraph: {
    title: "Nkundimana Augustin",
    description:
      "AI Researcher | Agricultural Engineer | Founder & CEO of AGRIC AI.",

    url: "https://augustin.agric-ai.com",

    siteName: "Nkundimana Augustin",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nkundimana Augustin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nkundimana Augustin",
    description:
      "AI Researcher | Agricultural Engineer | Founder & CEO of AGRIC AI.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}