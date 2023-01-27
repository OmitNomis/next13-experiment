import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
