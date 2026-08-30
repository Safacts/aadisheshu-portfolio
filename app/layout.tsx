import "./globals.css";

export const metadata = {
  title: "Aadisheshu Konga — AI Systems & Platform Infrastructure",
  description: "Portfolio of Aadisheshu Konga.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
