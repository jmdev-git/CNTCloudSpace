import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CNT CloudSpace",
  description:
    "Your Digital Workspace for faster, smarter, and safer collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased pt-20`}>
        <Header />
        {children}
      </body>
      <script src="https://cdn.jotfor.ms/agent/embedjs/019c55dbd73d73689bcf8cfa8216ac931889/embed.js"></script>
    </html>
  );
}
