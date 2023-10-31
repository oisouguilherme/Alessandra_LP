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
            Alessandra é uma Personal Trainer apaixonada e comprometida em
            fornecer treinos personalizados de alta qualidade. Sua experiência
            consolidada e abordagem singular capacitam indivíduos a atingirem
            seus objetivos de saúde e condicionamento físico.
          </p>
          <p className="text-justify">
            Com a recente incursão em treinos ao vivo no Instagram, Alessandra
            oferece uma oportunidade única para você se envolver em uma jornada
            de fitness personalizada, onde cada sessão é uma chance de superar
            limites e alcançar seu melhor desempenho. Sua paixão por promover um
            estilo de vida saudável é evidente em cada treino ao vivo,
            permitindo que você mergulhe em uma experiência de treino interativo
            e eficaz.
          </p>
          <p className="text-justify">
            Explore um novo mundo de condicionamento físico e bem-estar sob a
            orientação de Alessandra. Junte-se a nós no Instagram para vivenciar
            treinos ao vivo de qualidade excepcional e embarque em uma jornada
            rumo aos seus objetivos de saúde, fitness e bem-estar.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={Ale} className="md:w-[80%]" />
        </div>
      </div>
    </div>
  );
}
