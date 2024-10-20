import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
const manrope= Manrope({subsets:["cyrillic"]});
export const metadata: Metadata = {
  title: "Public-Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        disableTransitionOnChange
        themes={["dark", "light"]}
        defaultTheme="light"
      >
        <body className={`${inter.className} ${manrope.className}`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
