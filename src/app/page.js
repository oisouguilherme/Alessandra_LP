"use client"
import { BannerMain } from "@/components/BannerMain";
import { ComoAssinar } from "@/components/ComoAssinar";
import { Footer } from "@/components/Footer";
import { PerguntasFreq } from "@/components/PerguntasFreq";
import { Planos } from "@/components/Planos";
import { SobreAlessandra } from "@/components/SobreAlessandra";
import { SobreProduto } from "@/components/SobreProduto";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BannerMain />
      <SobreProduto />
      <ComoAssinar />
      <Planos />
      <SobreAlessandra />
      <PerguntasFreq />
      <Footer />
    </>
  )
}
