import Header from "@/components/header";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const title = "Shay Peleg: senior full-stack engineer for AI products";
const description =
  "Shay Peleg builds React, Next.js and TypeScript frontends and multi-agent AI features, with 5 years of experience on production web apps in Tel Aviv.";

// The share image is app/opengraph-image.png (Next's file convention); metadataBase makes its URL absolute.
export const metadata = {
  metadataBase: new URL("https://shaypeleg.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", url: "/", siteName: "Shay Peleg" },
  twitter: { card: "summary_large_image", title, description },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#232323" },
  ],
};

// Sets the theme class before first paint, so a dark visitor never sees a light flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} motion-safe:scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
