export function BannerMain() {
  return (
    <div className="bg-[url('/bg.webp')] bg-cover w-full">
      <div className="bg-[url('/ale.png')] bg-no-repeat bg-bottom ">
        <div className="bg-black/40 px-4 pt-72 pb-12 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptatum officiis, modi atque corrupti in ab rem vero quisquam
              voluptatibus.
            </h2>
            <div className="text-white text-center space-y-3 max-w-lg mx-auto">
              <button className="bg-black text-white w-full py-4 rounded-md font-medium uppercase">
                Quero treinar com Alessandra
              </button>
              <p>
                Lorem ipsum dolor sit ametstr <strong>consectetur</strong> ,
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
