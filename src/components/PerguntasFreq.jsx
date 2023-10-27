"use client";
import { useState } from "react";

export function PerguntasFreq() {
  return (
    <div className="bg-[url('/banner2.png')] bg-cover bg-center bg-no-repeat">
      <div className="md:bg-black/60 bg-black/80 w-full ">
        <div className="max-w-6xl mx-auto pb-12 pt-32 px-4">
          <div className="grid md:grid-cols-2 items-end">
            <div></div>
            <div className="space-y-3 pt-12 flex flex-col text-zinc-900">
              <div className="uppercase text-white text-lg pb-4">
                <p>Ainda tem dúvidas?</p>
                <h2 className="text-4xl font-bold">Perguntas frequentes</h2>
              </div>
              <Card
                pergunta={"Quero me inscrever, como faço?"}
                resposta={`Para se inscrever nos treinos privados ao vivo com Alessandra na plataforma Hotmart, siga estes passos simples: Acesse o site da Hotmart, clique em "Inscrever-se" ou "Comprar Agora," escolha sua forma de pagamento, conclua o pagamento e, após a confirmação, você terá acesso ao programa. Comece a transformar sua jornada de fitness e bem-estar hoje mesmo!`}
              />
              <Card
                pergunta={
                  "Quais os planos existentes apenas do Perfil Privado Alê Treinos?"
                }
                resposta={
                  " dicta amet rem provident natus, architecto voluptas a quidem voluptates eveniet obcaecati est tempore nesciunt eaque veritatis molestias."
                }
              />
              <Card
                pergunta={
                  "Quais as formas de pagamento no Perfil Privado Alê Treinos?"
                }
                resposta={
                  "O Perfil Privado Alê Treinos pode ser assinado via cartão de crédito, PIX ou boleto."
                }
              />
              <Card
                pergunta={
                  "Qual é a programação dos treinos ao vivo com Alessandra?"
                }
                resposta={
                  "Nossos treinos ao vivo são realizados regularmente, e a programação pode variar. Assim que você se inscrever, receberá acesso a um calendário atualizado com os horários e as datas das sessões."
                }
              />
              <Card
                pergunta={
                  "Posso acessar os treinos após a transmissão ao vivo?"
                }
                resposta={
                  "Sim, todos os treinos ao vivo são gravados e disponibilizados para os inscritos. Você pode assisti-los posteriormente, adaptando o horário à sua conveniência."
                }
              />
              <Card
                pergunta={" Qual é a política de cancelamento e reembolso?"}
                resposta={
                  "Oferecemos uma política flexível de cancelamento e reembolso. Se, por qualquer motivo, você não estiver satisfeito com o programa, entre em contato conosco para obter assistência com cancelamentos e reembolsos."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card({ pergunta, resposta }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md py-1 px-3 bg-white/50">
      <div
        className="flex justify-between items-center cursor-pointer gap-4"
        onClick={toggleAccordion}
      >
        <h2 className="font-medium">{pergunta}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden max-h-0 transition-max-h ease-in-out duration-300 ${
          isOpen ? "max-h-screen" : ""
        }`}
      >
        <p className="mt-1 text-sm">{resposta}</p>
      </div>
    </div>
  );
}
