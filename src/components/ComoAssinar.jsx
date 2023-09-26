import { Icon1 } from "@/assets/Icons";
import Ale from "../assets/ale2.png";
import Image from "next/image";

export function ComoAssinar() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-[#5E0583] w-full">
      <div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 py-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et
              ipsam cumquee?
            </h2>
            <div className="space-y-2 py-8">
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon1 />
                </div>
                <p>
                  Comece escolhendo o plano de assinatura que melhor se adapta
                  às suas necessidades.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon1 />
                </div>
                <p>
                  Após selecionar o plano desejado, prossiga para o pagamento.
                  Aceitamos cartão de crédito e Pix para maior comodidade.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon1 />
                </div>
                <p>
                  Após efetuar o pagamento, o próximo passo é solicitar o acesso
                  ao nosso perfil privado no Instagram.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon1 />
                </div>
                <p>
                  Assim que você solicitar o acesso e o nosso sistema
                  identificar o seu pagamento, o seu pedido será automaticamente
                  aprovado.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon1 />
                </div>
                <p>
                  Esteja pronto para começar a treinar! Os treinos estão
                  agendados diariamente às 8h e às 20h.
                </p>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-400 duration-300 w-full text-white py-3 rounded-md font-bold">
              QUERO TREINAR COM A ALESSANDRA
            </button>
            <p className="text-white text-center">
              A partir de <strong>R$26,67/mês</strong> no plano anual
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Image src={Ale} className="w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
