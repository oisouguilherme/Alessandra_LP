import Ale from "../assets/ale2.png";
import Image from "next/image";

export function SobreAlessandra() {
  return (
    <div className="bg-purple-800">
      <div className="max-w-6xl mx-auto px-4 text-white py-32 grid grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold uppercase">
            <span className="text-black">Quem é</span> Alessandra Palma ?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex.
            Consequuntur, laborum tempora ducimus molestias atque optio qui hic
            fugit sint officia odit aliquid illum. Perspiciatis dignissimos et
            ipsa aut.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            earum eaque rerum accusamus sunt ipsa perferendis eveniet
            voluptatibus, beatae, nulla est corporis aperiam quisquam aut
            pariatur tempore ad? Architecto, voluptate.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            molestiae doloremque ut porro eligendi at? Libero exercitationem
            dolor fugit eius.
          </p>
        </div>
        <div className="flex justify-end">
          <Image src={Ale} className="w-[80%]" />
        </div>
      </div>
    </div>
  );
}
