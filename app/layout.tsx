import Header from "@/components/header";
import "./globals.css";
import { Kanit } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { BackdropWrapper } from "@/components/backdrop-wrapper";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Shay Peleg | Full-Stack Engineer",
  description:
    "Shay Peleg is a Senior Full-Stack Engineer specializing in frontend and AI-driven platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${kanit.className} relative bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50 dark:text-opacity-90`}
      >
        {/* Background glows: soft indigo + sky (light) / deep indigo + cyan (dark) */}
        <div className="absolute top-[-6rem] -z-10 right-[6rem] h-[31.25rem] w-[31.25rem] rounded-full blur-3xl sm:w-[68.75rem] bg-indigo-200/60 dark:bg-indigo-600/25"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-3xl sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-sky-200/70 dark:bg-cyan-600/20"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <BackdropWrapper>{children}</BackdropWrapper>
            <Footer />
            <ThemeSwitch />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
