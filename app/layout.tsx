import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Header'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ImportLiliMLab - Equipamiento Científico y Analítico',
  description: 'Importadora especializada en equipamiento e instalación de equipos y suministros de laboratorio. Instrumental científico y analítico con fabricantes de prestigio mundial.',
  keywords: 'laboratorio, equipamiento científico, instrumental analítico, microscopios, importadora, suministros laboratorio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
