"use client";
import { useState } from "react";

export function PerguntasFreq() {
  return (
    <div className="bg-gradient-to-tl from-purple-600 to-[#5E0583] w-full">
      <div className="max-w-6xl mx-auto pb-24">
        <div className="uppercase text-white text-lg">
          <p>Ainda tem dúvidas?</p>
          <h2 className="text-4xl font-bold">Perguntas frequentes</h2>
        </div>
        <div className="space-y-3 pt-12 flex flex-col">
          <Card
            pergunta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum dolores doloremque,"
            }
            resposta={
              " dicta amet rem provident natus, architecto voluptas a quidem voluptates eveniet obcaecati est tempore nesciunt eaque veritatis molestias."
            }
          />
          <Card
            pergunta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum dolores doloremque,"
            }
            resposta={
              " dicta amet rem provident natus, architecto voluptas a quidem voluptates eveniet obcaecati est tempore nesciunt eaque veritatis molestias."
            }
          />
          <Card
            pergunta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum dolores doloremque,"
            }
            resposta={
              " dicta amet rem provident natus, architecto voluptas a quidem voluptates eveniet obcaecati est tempore nesciunt eaque veritatis molestias."
            }
          />
          <Card
            pergunta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum dolores doloremque,"
            }
            resposta={
              " dicta amet rem provident natus, architecto voluptas a quidem voluptates eveniet obcaecati est tempore nesciunt eaque veritatis molestias."
            }
          />
          <Card
            pergunta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum dolores doloremque,"
            }
            resposta={
              " dicta amet rem provident natus, architecto voluptas a quidem voluptates eveniet obcaecati est tempore nesciunt eaque veritatis molestias."
            }
          />
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
    <div className="border border-gray-200 text-white rounded-md p-3 w-1/2">
      <div
        className="flex justify-between items-center cursor-pointer gap-4"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold">{pergunta}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
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
      {isOpen && <p className="mt-1">{resposta}</p>}
    </div>
  );
}
