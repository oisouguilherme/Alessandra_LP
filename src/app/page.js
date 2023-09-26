import { BannerMain } from "@/components/BannerMain";
import { ComoAssinar } from "@/components/ComoAssinar";
import { Footer } from "@/components/Footer";
import { PerguntasFreq } from "@/components/PerguntasFreq";
import { Planos } from "@/components/Planos";
import { SobreAlessandra } from "@/components/SobreAlessandra";
import { SobreProduto } from "@/components/SobreProduto";

export default function Home() {
  return (
    <>
      <BannerMain />
      <SobreProduto />
      <ComoAssinar />
      <Planos />
      <SobreAlessandra />
      <PerguntasFreq />
      <Footer/>
    </>
  )
}
