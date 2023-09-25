import { Icon1 } from "@/assets/Icons";
import Ale from "../assets/ale2.png";
import Image from "next/image";

export function ComoAssinar() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-[#5E0583] w-full">
      <div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 gap-8 py-24">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et
              ipsam cumquee?
            </h2>
            <div className="space-y-2 py-8">
              <div className="bg-zinc-100 rounded-md px-4 py-3 font-medium flex gap-4 items-center">
                <Icon1 />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, laudantium.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 font-medium flex gap-4 items-center">
                <Icon1 />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, laudantium.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 font-medium flex gap-4 items-center">
                <Icon1 />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, laudantium.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 font-medium flex gap-4 items-center">
                <Icon1 />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, laudantium.
                </p>
              </div>
              <div className="bg-zinc-100 rounded-md px-4 py-3 font-medium flex gap-4 items-center">
                <Icon1 />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, laudantium.
                </p>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-400 duration-300 w-full text-white py-3 rounded-md font-bold">
              QUERO TREINAR COM O ALESSANDRA
            </button>
            <p className="text-white">
              Lorem ipsum,<strong>dolor sit</strong> amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image src={Ale} className="w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
