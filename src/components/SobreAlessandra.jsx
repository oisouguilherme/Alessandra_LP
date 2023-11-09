import Ale from "../assets/quemSou.png";
import Image from "next/image";

export function SobreAlessandra() {
  return (
    <div className="bg-gradient-to-bl from-purple-600 to-[#5E0583] w-full">
      <div className="max-w-6xl mx-auto px-4 text-white py-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-white pb-4">
            Quem é Alessandra Palma ?
          </h2>
          <p className="text-justify">
            Alessandra é uma Personal Trainner apaixonada por resultados!
            <br />
            Sua experiência conta com mais de 10 anos de carreira e abordagem
            ampla, capacitando os alunos a alcançarem seus objetivos de saúde e
            condicionamento físico. Seja emagrecimento acelerado ou ganho de
            massa muscular.
          </p>
          <p className="text-justify">
            Com esse programa de treinos ao vivo no Instagram, Alessandra
            oferece uma oportunidade única para você se superar em uma jornada
            personalizada, quando e de onde você estiver. Explore um novo mundo
            de condicionamento físico e bem-estar sob a orientação de
            Alessandra.
          </p>
          <p className="text-justify">
            Junte-se a nós no Instagram para participar de treinos ao vivo e
            suporte personalizado, com exercícios para treinar em casa ou na
            academia. Embarque em uma jornada rumo aos seus objetivos. A sua
            melhor versão está aqui!
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={Ale} className="md:w-[80%]" />
        </div>
      </div>
    </div>
  );
}
