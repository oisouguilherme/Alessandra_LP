import { IconCheck } from "@/assets/Icons";

export function SobreProduto() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#5E0583] text-center">
          A partir desse momento,
          <br /> você irá:
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
              Transformar seu corpo e mente, e ver no espelho a melhor versão de
              si mesmo.
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
              Vestir com confiança e estilo, sabendo que todas as roupas ficarão
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
            <p>Aumentar sua autoestima e se sintir incrível todos os dias.</p>
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
              Desenvolver disciplina para atingir seus objetivos e manter o foco
              em seus sonhos e aspirações.
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
              Descobrir o prazer de viver uma vida mais saudável, cheia de
              energia e vitalidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
