import Header from '@/components/header';
import './globals.css';
import { Kanit } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { BackdropWrapper } from '@/components/backdrop-wrapper';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Shay Peleg | Frontend Developer',
  description: 'Shay Peleg is a Fronend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${kanit.className} relative  bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#90f95f95] absolute top-[-6rem] -z-10 right-[6rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem] dark:bg-[#e69859d3]'></div>
        <div className='bg-[#6baaf1d7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <BackdropWrapper>{children}</BackdropWrapper>
            <Footer />
            <ThemeSwitch />
            <Toaster position='bottom-right' />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
