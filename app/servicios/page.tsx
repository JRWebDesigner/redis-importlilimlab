'use client';
import Hero from "@/components/servicios/Hero"
import Pillars from "@/components/servicios/Pillars"
import QualityServices from "@/components/servicios/QualityServices"
import QualityDetails from "@/components/servicios/QualityDetails"
import CTA from '@/components/servicios/CTA'
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Pillars />      
      <QualityServices />
      <QualityDetails />
      <CTA />
    </div>
  );
}
