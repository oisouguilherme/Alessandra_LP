import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "@/assets/Icons";
import Ale from "../assets/passoApasso.png";
import Image from "next/image";

export function ComoAssinar() {
  return (
    <div
      id="comprar"
      className="bg-gradient-to-b from-purple-600 to-[#5E0583] w-full"
    >
      <div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 py-24">
          <div data-aos="fade-down" data-aos-easing="linear">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Siga esses passos para alcançar a sua melhor versão:
            </h2>
            <div className="space-y-2 py-8">
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon1 />
                </div>
                <p>
                  Escolha o plano de assinatura que melhor se adapta às suas
                  necessidades.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon2 />
                </div>
                <p>
                  Após selecionar o plano desejado, prossiga para o pagamento.
                  (Aceitamos cartão de crédito e pix).
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon3 />
                </div>
                <p>
                  Após efetuar o pagamento, o próximo passo é solicitar o acesso
                  ao nosso perfil privado no Instagram.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon4 />
                </div>
                <p>
                  Assim que você solicitar o acesso e o nosso sistema
                  identificar o seu pagamento, o seu pedido será automaticamente
                  aprovado.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 flex gap-4 items-center">
                <div>
                  <Icon5 />
                </div>
                <p>
                  Esteja pronto para começar a treinar! Os treinos estão
                  agendados diariamente em nosso perfil privado do Instagram.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5538997289879?off=u9i14bx1&bid=1700597420698"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 block text-center duration-300 w-full text-white py-3 rounded-md font-bold"
            >
              QUERO TREINAR COM A ALÊ
            </a>
            <p className="text-white text-center">
              A partir de <strong>R$49,90/mês</strong> no plano anual
            </p>
          </div>
          <div
            className="flex items-center justify-center md:justify-end"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <Image src={Ale} className="w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
