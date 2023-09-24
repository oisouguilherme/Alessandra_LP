import { Icon1 } from "@/assets/Icons";
import Ale from '../assets/ale2.png'
import Image from "next/image";

export function ComoAssinar() {
  return (
    <div className="bg-purple-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 gap-8 pb-32">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et
            ipsam cumquee?
          </h2>
          <div className="space-y-2 py-8">
            <div className="bg-purple-400 rounded-md px-4 py-1 flex gap-4 items-center text-white font-medium">
              <Icon1 />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, laudantium.
              </p>
            </div>
            <div className="bg-purple-400 rounded-md px-4 py-1 flex gap-4 items-center text-white font-medium">
              <Icon1 />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, laudantium.
              </p>
            </div>
            <div className="bg-purple-400 rounded-md px-4 py-1 flex gap-4 items-center text-white font-medium">
              <Icon1 />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, laudantium.
              </p>
            </div>
            <div className="bg-purple-400 rounded-md px-4 py-1 flex gap-4 items-center text-white font-medium">
              <Icon1 />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, laudantium.
              </p>
            </div>
            <div className="bg-purple-400 rounded-md px-4 py-1 flex gap-4 items-center text-white font-medium">
              <Icon1 />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, laudantium.
              </p>
            </div>
          </div>
          <button className="bg-black w-full text-white py-3 rounded-md font-medium">
            QUERO TREINAR COM O NOTION
          </button>
          <p className="text-white">Lorem ipsum,<strong>dolor sit</strong> amet consectetur adipisicing.</p>
        </div>
        <div className="flex items-center justify-end">
          <Image src={Ale} className="w-[80%]"/>
        </div>
      </div>
    </div>
  );
}
