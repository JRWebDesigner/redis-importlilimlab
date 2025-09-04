"use client"
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Categorys from '@/components/home/Categorys'
import MisionVision from '@/components/home/MisionVision'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
       <Hero />
       <Features />
       <Categorys />
       <MisionVision />
       <CTA />
    </div>
  );
}
