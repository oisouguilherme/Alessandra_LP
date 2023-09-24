import { BannerMain } from "@/components/BannerMain";
import { ComoAssinar } from "@/components/ComoAssinar";
import { PerguntasFreq } from "@/components/PerguntasFreq";
import { Planos } from "@/components/Planos";
import { SobreAlessandra } from "@/components/SobreAlessandra";
import { SobreProduto } from "@/components/SobreProduto";

export default function Home() {
  return (
    <>
      <BannerMain />
      <div className="bg-gradient-to-tr from-purple-700 via-violet-900 to-purple-700  w-full">
        <SobreProduto />

        <ComoAssinar />
      </div>
      <Planos />
      <SobreAlessandra />
      <PerguntasFreq />
    </>
  )
}
