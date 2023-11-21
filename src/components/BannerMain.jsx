import Image from "next/image";
import { Link } from "react-scroll";

export function BannerMain() {
  return (
    <div className="bg-[url('/bannerMobile.png')] md:bg-[url('/banner2.png')] bg-no-repeat bg-cover bg-center  relative">
      <Link to="comprar" smooth={true}>
        <Image
          src={"/bannerMobile.png"}
          width={800}
          height={800}
          className="w-full md:hidden"
        />
      </Link>
      <div className="px-4 h-screen w-full hidden md:block">
        <div className="text-white text-center max-w-6xl mx-auto h-full flex items-end justify-end">
          <div
            className="space-y-3 pb-12"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            <a
              href="https://pay.hotmart.com/M81294188Q?off=u9i14bx1&bid=1700597420698"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 duration-300 text-white w-full py-2 sm:py-4 text-sm sm:text-base px-24 rounded-md font-medium uppercase"
            >
              QUERO TREINAR COM A ALÊ
            </a>
            <p>
              A partir de <strong>R$29,90/mês</strong> no plano anual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
