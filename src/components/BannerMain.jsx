import Image from "next/image";

export function BannerMain() {
  return (
    <div className="md:bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center  relative">
      <div className="md:hidden">
        <Image
          src={"/banner.jpg"}
          width={800}
          height={800}
          className="w-full md:hidden"
        />
        <div className="flex justify-center">
          <a
            href="https://pay.hotmart.com/M81294188Q?off=u9i14bx1"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 duration-300 text-white w-[80%] py-4 text-sm sm:text-base rounded-md font-medium uppercase text-center mt-4"
          >
            QUERO alcançar meus resultados
          </a>
        </div>
      </div>
      <div className="px-4 h-screen w-full hidden md:block">
        <div className="text-white text-center max-w-6xl mx-auto h-full flex items-end justify-end">
          <div
            className="space-y-3 pb-12"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            <a
              href="https://pay.hotmart.com/M81294188Q?off=u9i14bx1"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 duration-300 text-white w-full py-2 sm:py-4 text-sm sm:text-base px-24 rounded-md font-medium uppercase"
            >
              QUERO alcançar meus resultados
            </a>
            <p>
              A partir de <strong>R$99,97/mês</strong> no plano trimestral
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
