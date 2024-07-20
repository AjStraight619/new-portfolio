import type { Metadata } from 'next';
import { Inter as FontSans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetBrainsFront = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Alex Straight Portfolio',
  description:
    'Alex Straight | A personal portfolio showcasing my projects, skills, and experience in software development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-jetBrains antialiased',
            fontSans.variable,
            jetBrainsFront.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
