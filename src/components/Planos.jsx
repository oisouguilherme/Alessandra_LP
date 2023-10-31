import Image from "next/image";
import Link from "next/link";
import Ale from "../assets/ale2.png";
import Logo from "../assets/logo.png";
import { IconCheck2 } from "@/assets/Icons";

export function Planos() {
  return (
    <section id="Mensalidades" className="bg-zinc-100">
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className="text-3xl font-bold text-center pb-8">
          ESCOLHA O <span className="text-[#5E0583]">MELHOR PLANO</span>
          <br /> PARA VOCÊ
        </h2>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="px-4 sm:px-8 py-4 text-white max-w-md rounded-md bg-gradient-to-bl from-purple-600 to-[#5E0583] mx-auto">
            <div className="text-center flex flex-col items-center sm:text-lg">
              <Image src={Logo} className="w-[70%] pb-4" />
              <p className="font-bold">GARANTA O SEU ACESSO</p>
              <p>a Treinos Diários Exclusivos por apenas:</p>
            </div>
            <div className="py-4 text-center uppercase">
              <p>
                de <span className="text-red-500">119,90</span> por R$ 99,00 ao
                mês ou
              </p>
              <p className="font-bold text-xl">
                por <span className="text-3xl">250,00</span> à vista!
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-sm sm:text-lg border-b pb-2">
                <IconCheck2 color={"fill-green-500"} />{" "}
                <span>Treinos ao vivo</span>
              </div>
              <div className="flex items-center gap-4 text-sm sm:text-lg border-b pb-2">
                <IconCheck2 color={"fill-green-500"} />{" "}
                <span>Acompanhamento aproximado</span>
              </div>
              <div className="flex items-center gap-4 text-sm sm:text-lg border-b pb-2">
                <IconCheck2 color={"fill-green-500"} />{" "}
                <span>Materiais complementares</span>
              </div>
              <div className="flex items-center gap-4 text-sm sm:text-lg border-b pb-2">
                <IconCheck2 color={"fill-green-500"} />{" "}
                <span>Suporte Individual</span>
              </div>
              <div className="flex items-center gap-4 text-sm sm:text-lg border-b pb-2">
                <IconCheck2 color={"fill-green-500"} />{" "}
                <span>Perfil privado para membros</span>
              </div>
              <div className="flex items-center gap-4 text-sm sm:text-lg pb-2">
                <IconCheck2 color={"fill-green-500"} />{" "}
                <span>
                  <span className="text-green-500 font-bold">[BÔNUS] </span>
                  E-Book sobre...
                </span>
              </div>
            </div>
            <Link
              className="bg-green-500 uppercase hover:bg-green-400 duration-300 w-full text-white py-3 rounded-md font-bold block text-center mt-6"
              href={""}
            >
              Quero treinar com Alessandra
            </Link>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-[#5E0583]">
              Transforme-se com consistência!
            </h2>
            <p className="text-justify">
              Opte por nosso plano anual exclusivo e mergulhe em uma jornada de
              treinos diários contínuos. Por apenas{" "}
              <strong className="text-[#5E0583]">12x de R$ 32,90 ao mês</strong>
              , você garante acesso completo por um ano, potencializando seus
              resultados enquanto economiza. E não se preocupe: estamos
              comprometidos com sua satisfação. Oferecemos garantia de
              <strong className="text-[#5E0583]">
                {" "}
                devolução em até 7 dias
              </strong>
              , caso sinta que este programa não é para você. Sua segurança e
              contentamento são nossa prioridade absoluta.
            </p>
            <Image src={"/banner2.png"} width={800} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
