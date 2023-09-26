import { IconCheck } from "@/assets/Icons";

export function SobreProduto() {
  return (
    <div className="bg-gradient-to-t from-purple-600 to-[#5E0583] w-full">
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <h2 className="text-2xl sm:text-4xl font-bold text-white text-center">
          A partir desse momento,
          <br /> você irá:
        </h2>
        <div className="flex flex-wrap gap-4 justify-center py-12">
          <div className="bg-white hover:bg-zinc-200 duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 px-4 rounded-md flex items-center gap-4 ">
            <div>
              <IconCheck />
            </div>
            <p>
              Transforme seu corpo e mente, e veja no espelho a melhor versão de
              si mesmo.
            </p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 p-4 rounded-md flex items-center gap-4 ">
            <div>
              <IconCheck />
            </div>
            <p>
              Vista-se com confiança e estilo, sabendo que todas as roupas
              ficarão ótimas em você.
            </p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 p-4 rounded-md flex items-center gap-4 ">
            <div>
              <IconCheck />
            </div>
            <p>Aumente sua autoestima e sinta-se incrível todos os dias.</p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 p-4 rounded-md flex items-center gap-4 ">
            <div>
              <IconCheck />
            </div>
            <p>
              Aprenda a aceitar e amar o seu corpo, independentemente de sua
              forma ou tamanho.
            </p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 p-4 rounded-md flex items-center gap-4 ">
            <div>
              <IconCheck />
            </div>
            <p>
              Desenvolva disciplina para atingir seus objetivos e mantenha o
              foco em seus sonhos e aspirações.
            </p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 text-sm cursor-pointer shadow-xl w-80 h-24 p-4 rounded-md flex items-center gap-4 ">
            <div>
              <IconCheck />
            </div>
            <p>
              Descubra o prazer de viver uma vida mais saudável, cheia de
              energia e vitalidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
