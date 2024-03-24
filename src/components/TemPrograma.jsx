import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { IconCheck2 } from "@/assets/Icons";
import ImageAntesDepois from "../assets/antesDepois.png";
import ImageAntesDepois2 from "../assets/antesDepois2.png";

export function TemPrograma() {
  return (
    <section id="Mensalidades" className="bg-zinc-100">
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className="text-3xl font-bold text-center pb-8 uppercase">
          O que você encontra no <br />
          <span className="text-[#5E0583]">programa:</span>
        </h2>
        <div className="">
          <div className="px-4 sm:px-8 py-4 text-white w-full max-w-3xl rounded-md bg-gradient-to-bl from-purple-600 to-[#5E0583] mx-auto">
            <div className="text-center flex flex-col items-center sm:text-lg">
              <Image src={Logo} className="w-[50%] pb-4" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 ">
                <div className="flex items-center gap-4 border-b pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Treinos ao vivo todos os dias</span>
                </div>
                <div className="flex items-center gap-4 border-b pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Acompanhamento personalizado.</span>
                </div>
                <div className="flex items-center gap-4 border-b pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Aplicativo de treino exclusivo</span>
                </div>
                <div className="flex items-center gap-4 border-b pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Materiais complementares</span>
                </div>
                <div className="flex items-center gap-4 border-b pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Suporte Individual</span>
                </div>
                <div className="flex items-center gap-4 border-b pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Perfil privado para membros</span>
                </div>
                <div className="flex items-center gap-4 pb-2">
                  <IconCheck2 color={"fill-green-500"} />{" "}
                  <span>Lives gravadas para acessar quando e onde quiser</span>
                </div>
              </div>
              <div>
                <div className="flex gap-2 pb-2">
                  <span>
                    <span className="text-[#00ff00] font-bold text-lg">
                      [BÔNUS]{" "}
                    </span>
                    <span className="font-medium text-lg">
                      Desafios Semanais:
                    </span>{" "}
                    <br /> Os desafios tem o intuido de acelerar seus
                    resultados.
                  </span>
                </div>
                <div className="flex gap-2 pb-2">
                  <span>
                    <span className="text-[#00ff00] font-bold text-lg">
                      [BÔNUS]{" "}
                    </span>
                    <span className="font-medium text-lg">
                      Acompanhamento Nutricional:
                    </span>{" "}
                    <br />
                    Contaremos com apoio de uma nutricionista no programa.
                    Auxiliando a sua alimentação.
                  </span>
                </div>
                <div className="flex gap-2 pb-2">
                  <span>
                    <span className="text-[#00ff00] font-bold text-lg">
                      [BÔNUS]{" "}
                    </span>
                    <span className="font-medium text-lg">
                      Instrução para dores em articulações:
                    </span>{" "}
                    <br />
                    Vídeos explicativos para a prevenção de lesões.
                  </span>
                </div>
              </div>
            </div>
            <a
              className="bg-green-500 uppercase hover:bg-green-400 duration-300 w-full text-white py-3 rounded-md font-bold block text-center mt-6"
              href={
                "https://wa.me/5538997289879?off=u9i14bx1&bid=1700597420698"
              }
              target="_blank"
            >
              Quero treinar com Alessandra
            </a>
          </div>
        </div>

        <div className="flex pt-8 gap-4 justify-center flex-wrap">
          <Image src={ImageAntesDepois} className="sm:w-96" />

          <Image src={ImageAntesDepois2} className="sm:w-96" />
        </div>
      </div>
    </section>
  );
}
