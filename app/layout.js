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
  icons: {
    icon: "/CLOUDSPACE.ico", // main favicon
    shortcut: "/CLOUDSPACE.ico", // optional, for Windows shortcut
    apple: "/CLOUDSPACE.ico", // for iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/CLOUDSPACE.png" type="image/png" />
        <link rel="apple-touch-icon" href="/CLOUDSPACE.png" />
        <link rel="shortcut icon" href="/CLOUDSPACE.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased pt-20`}>
        <Header />
        {children}
      </body>
     <script src='https://cdn.jotfor.ms/agent/embedjs/019c78fed2027b5c82b36521f553a74cae4b/embed.js'>
</script>
    </html>
  );
}
