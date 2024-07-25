import Image from "next/image";
import Logo from "../assets/logo.png";
import { IconCheck2 } from "@/assets/Icons";

import ImageAntesDepois1 from "../assets/antesEDepois/1.png";
import ImageAntesDepois2 from "../assets/antesEDepois/2.png";
import ImageAntesDepois3 from "../assets/antesEDepois/3.jpg";
import ImageAntesDepois4 from "../assets/antesEDepois/4.jpg";
import ImageAntesDepois5 from "../assets/antesEDepois/5.jpg";
import ImageAntesDepois6 from "../assets/antesEDepois/6.png";
import ImageAntesDepois7 from "../assets/antesEDepois/7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function TemPrograma() {
  return (
    <section id="Mensalidades" className="bg-zinc-100">
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className="text-3xl font-bold text-center pb-8 uppercase">
          O que você encontra no <br />
          <span className="v">programa:</span>
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
              QUERO alcançar meus resultados
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pt-32">
          <h2 className="text-3xl font-bold text-center pb-8 uppercase max-w-3xl mx-auto">
            Estes são
            <b className="text-[#5E0583]"> alguns dos resultados</b> alcançados
            com o Método Alê Treinos:
          </h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              440: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            //pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide>
              <Image
                src={ImageAntesDepois1}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageAntesDepois2}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageAntesDepois3}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageAntesDepois4}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageAntesDepois5}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageAntesDepois6}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageAntesDepois7}
                className="w-96 object-cover h-96"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
