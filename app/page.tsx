import type { Metadata } from "next";
import AadisheshuPortfolio from "./aadisheshu/AadisheshuPortfolio";

export const metadata: Metadata = {
  title: "Aadisheshu Konga — AI Systems & Platform Infrastructure",
  description:
    "Portfolio of Aadisheshu Konga, a software engineer building applied AI products, production platforms, and resilient infrastructure.",
  alternates: { canonical: "https://aadisheshu.jnwn.xyz" },
  openGraph: {
    title: "Aadisheshu Konga — AI Systems & Platform Infrastructure",
    description:
      "Software engineer building applied AI products, production platforms, and resilient infrastructure.",
    url: "https://aadisheshu.jnwn.xyz",
    siteName: "Aadisheshu Konga",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadisheshu Konga — AI Systems & Platform Infrastructure",
    description:
      "Software engineer building applied AI products, production platforms, and resilient infrastructure.",
  },
};

export default function HomePage() {
  return <AadisheshuPortfolio />;
}
