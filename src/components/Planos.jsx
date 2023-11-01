import { Payments } from "@/assets/Icons";
import Link from "next/link";

export function Planos() {
  return (
    <section id="Mensalidades" className="">
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className="text-3xl font-bold text-center pb-8">
          ESCOLHA O <span className="text-[#5E0583]">MELHOR PLANO</span>
          <br /> PARA VOCÊ
        </h2>
        <div className="flex justify-center md:justify-between flex-wrap items-center gap-4">
          <div className="rounded-lg border-4 border-[#5E0583] w-full sm:w-72 py-8 hover:scale-105 duration-300 cursor-pointer">
            <h3 className="uppercase text-lg font-medium text-center">
              PLANO MENSAL
            </h3>
            <div className="text-center py-8">
              <div className="flex gap-1 items-start uppercase justify-center">
                <p className="text-9xl font-black text-[#5E0583]">99</p>
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-[#5E0583]">90</span>
                  <span className="text-lg font-medium">/mês</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 space-y-2 uppercase text-xs">
              <p>7 dias de garantia</p>
              <Link
                href={""}
                className="bg-green-500 hover:bg-green-500/90 duration-300 text-white w-full text-center py-2 rounded-md uppercase font-bold text-lg"
              >
                Eu quero Assinar
              </Link>
              <Payments />
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-tl from-purple-600 to-[#5E0583] w-full sm:w-80 py-12 text-white hover:scale-105 duration-300 cursor-pointer">
            <h3 className="uppercase text-lg font-medium text-center">
              PLANO ANUAL
            </h3>
            <div className="text-center py-8">
              <span className="text-sm">12X DE</span>
              <div className="flex gap-1 items-start uppercase justify-center">
                <p className="text-9xl font-black">32</p>
                <div className="flex flex-col">
                  <span className="text-5xl font-black">90</span>
                  <span className="text-lg font-medium">/mês</span>
                  <span className="text-xs">
                    ou 394,80 <br /> À vista
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 space-y-2 uppercase text-xs ">
              <p>7 dias de garantia</p>
              <Link
                href={""}
                className="bg-green-500 hover:bg-green-500/90 duration-300 text-white w-full text-center py-2 rounded-md uppercase font-bold text-lg"
              >
                Eu quero Assinar
              </Link>
              <Payments />
            </div>
          </div>

          <div className="rounded-lg border-4 border-[#5E0583] w-full sm:w-72 py-8 hover:scale-105 duration-300 cursor-pointer">
            <h3 className="uppercase text-lg font-medium text-center">
              PLANO SEMESTRAL
            </h3>
            <div className="text-center py-6">
              <span className="text-sm">6X DE</span>
              <div className="flex gap-1 items-start uppercase justify-center">
                <p className="text-9xl font-black text-[#5E0583]">49</p>
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-[#5E0583]">90</span>
                  <span className="text-lg font-medium">/mês</span>
                  <span className="text-xs">
                    ou 299,40 <br /> À vista
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 space-y-2 uppercase text-xs">
              <p>7 dias de garantia</p>
              <Link
                href={""}
                className="bg-green-500 hover:bg-green-500/90 duration-300 text-white w-full text-center py-2 rounded-md uppercase font-bold text-lg"
              >
                Eu quero Assinar
              </Link>
              <Payments />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
