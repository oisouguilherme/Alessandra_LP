export function BannerMain() {
  return (
    <div className="bg-[url('/bannerMobile.png')] md:bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center md:bg-top relative">
      <div className="px-4 h-screen w-full">
        <div className="text-white text-center max-w-6xl mx-auto h-full flex items-end justify-end">
          <div
            className="space-y-3 pb-12 hidden md:block"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            <button className="bg-green-500 hover:bg-green-400 duration-300 text-white w-full py-2 sm:py-4 text-sm sm:text-base px-24 rounded-md font-medium uppercase">
              Quero treinar com Alessandra
            </button>
            <p>
              A partir de <strong>R$26,67/mês</strong> no plano anual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
