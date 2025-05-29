import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { geist } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'InAnFi - InSalud ERP',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
    <body className={`${geist.className} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
    </body>
    </html>
  );
}
