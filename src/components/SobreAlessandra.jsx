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
            Alessandra é uma profissional apaixonada e dedicada, com uma
            carreira sólida como Personal Trainer e Nutricionista. Como
            proprietária da academia Mundo Fitness, ela tem se destacado no
            mundo do condicionamento físico e bem-estar.
          </p>
          <p className="text-justify">
            Recentemente, Alessandra expandiu seus horizontes, incorporando
            áreas diversificadas, como natação, balé e treino funcional no
            repertório de sua academia.
          </p>
          <p className="text-justify">
            Sua abordagem única e personalizada para treinamento, combinada com
            sua expertise em nutrição, tem transformado vidas, capacitando seus
            clientes a atingirem seus objetivos de saúde e fitness.
          </p>
          <p className="text-justify">
            Seja bem-vindo ao universo de Alessandra, onde a excelência e a
            dedicação se unem para impulsionar seu sucesso no Instagram, com
            treinos ao vivo de alta qualidade.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={Ale} className="md:w-[80%]" />
        </div>
      </div>
    </div>
  );
}
