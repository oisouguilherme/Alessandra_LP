import { LuCheck } from "react-icons/lu";

export function Planos() {
  return (
    <section id="Mensalidades" className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className="text-3xl font-bold text-center pb-8">
          ESCOLHA O <span className="text-purple-700">MELHOR PLANO</span><br /> PARA VOCÊ
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="border p-8 w-72 h-fit flex flex-col gap-8 hover:scale-105 duration-300 cursor-pointer">
            <p className="text-lg text-center font-bold text-purple-700">
              MUSCULAÇÃO
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$90</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" />
                Acesso Livre à Área de Musculação
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Treinos Personalizados
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" /> Foco em Resultados
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Flexibilidade de Horários
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Ambiente Motivador
              </p>
            </div>
            <a
              href="#"
              className="bg-purple-700 duration-300 text-center py-2"
            >
              Saiba Mais
            </a>
          </div>

          <div className="border p-8 w-72 h-[520px] flex flex-col gap-8 hover:scale-105 duration-300 cursor-pointer">
            <p className="text-lg text-center font-bold text-purple-700">
              COMPLETO
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$120</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" />
                Acesso a Todas as Modalidades
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Abordagem Fitness Integral
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Variedade de Treinos
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" /> Resultados Amplos
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Suporte Personalizado
              </p>
            </div>
            <a
              href="#"
              className="bg-purple-700 text-center py-2 duration-300"
            >
              Saiba Mais
            </a>
          </div>

          <div className="border p-8 w-72  h-fit flex flex-col gap-8 hover:scale-105 duration-300 cursor-pointer">
            <p className="text-lg text-center font-bold text-purple-700">
              FUNCIONAL
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$70</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" /> Variedade de Treinos
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" /> Aulas Dinâmicas e
                Divertidas
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" />
                Queime Calorias
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" /> Melhore a Flexibilidade
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" /> Adaptação para Todos os
                Níveis
              </p>
            </div>
            <a
              href="#"
              className="bg-purple-700 duration-300 text-center py-2"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
