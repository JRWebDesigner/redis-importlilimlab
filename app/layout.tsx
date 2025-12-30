import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {MessageSquareText} from 'lucide-react'
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
        <Link href="https://wa.link/s7ujnz" target="_blank" className="fixed z-50 right-3 bottom-8 rounded-full bg-green-600 p-4 text-white font-bold hover:scale-110 duration-300">
           <MessageSquareText className="w-10 h-10"/>
        </Link>
        <Footer />
      </body>
    </html>
  );
}
