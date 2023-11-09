import { IconCheck } from "@/assets/Icons";

export function SobreProduto() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#5E0583] text-center">
          Com o nosso time
          <br /> você vai:
        </h2>
        <div className="flex flex-wrap gap-4 justify-center pt-12">
          <div
            className="bg-[#5E0583] hover:bg-purple-800 text-white duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 px-4 rounded-md flex items-center gap-4"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <div>
              <IconCheck />
            </div>
            <p>
              Transformar a sua mente e ver no espelho a melhor versão do seu
              físico.
            </p>
          </div>
          <div
            className="bg-[#5E0583] hover:bg-purple-800 text-white duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 px-4 rounded-md flex items-center gap-4"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <div>
              <IconCheck />
            </div>
            <p>
              Se produzir com confiança, sabendo que todas as roupas ficarão
              ótimas em você.
            </p>
          </div>
          <div
            className="bg-[#5E0583] hover:bg-purple-800 text-white duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 px-4 rounded-md flex items-center gap-4"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <div>
              <IconCheck />
            </div>
            <p>
              Trabalhar a sua disciplina em conjunto e assim atingir os seus
              objetivos.
            </p>
          </div>
          <div
            className="bg-[#5E0583] hover:bg-purple-800 text-white duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 px-4 rounded-md flex items-center gap-4"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <div>
              <IconCheck />
            </div>
            <p>
              Descobrir o prazer de viver uma vida verdadeiramente: saudável,
              cheia de energia e vitalidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
