import { IconCheck } from "@/assets/Icons";

export function SobreProduto() {
  return (
    <div className="bg-gradient-to-t from-purple-600 to-[#5E0583] w-full">
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <h2 className="text-4xl font-bold text-white text-center">
          A partir desse momento,
          <br /> você irá:
        </h2>
        <div className="flex flex-wrap gap-4 justify-center py-12">
          <div className="bg-white hover:bg-zinc-200 duration-300 cursor-pointer shadow-xl w-72 h-24 p-4 rounded-md flex items-center gap-4">
            <IconCheck />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 cursor-pointer shadow-xl w-72 h-24 p-4 rounded-md flex items-center gap-4">
            <IconCheck />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 cursor-pointer shadow-xl w-72 h-24 p-4 rounded-md flex items-center gap-4">
            <IconCheck />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 cursor-pointer shadow-xl w-72 h-24 p-4 rounded-md flex items-center gap-4">
            <IconCheck />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 cursor-pointer shadow-xl w-72 h-24 p-4 rounded-md flex items-center gap-4">
            <IconCheck />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="bg-white hover:bg-zinc-200 duration-300 cursor-pointer shadow-xl w-72 h-24 p-4 rounded-md flex items-center gap-4">
            <IconCheck />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
