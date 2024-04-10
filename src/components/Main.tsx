import { musics } from "../musics";
import { ChevronLeft, ChevronRight, Heart, Play } from "lucide-react";

export function Main() {
  return (
    <main className="flex-1 p-6 mt-6 mr-6 bg-night rounded-xl sm:mt-2 md:p-4 md:mt-2 md:mr-2">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10 md:text-2xl">Boa Tarde</h1>

      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-1">
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-x-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <div className="h-16 w-16 bg-gradient-to-br from-purple to-white flex items-center justify-center rounded">
            <Heart size={20} fill="white" />
          </div>
          <strong className="sm:text-xs md:text-sm">Músicas Curtidas</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green text-black ml-auto mr-4 invisible group-hover:visible md:w-14 md:h-10">
            <Play size={20} fill="black" />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 group flex items-center font-bold gap-x-4 rounded overflow-hidden hover:bg-white/10 transition-colors sm:hidden"
        >
          <img
            className="h-16 w-16 rounded"
            src="https://github.com/GomesKay.png"
            alt="Imagem do Álbum"
          />
          <strong className="md:text-sm">Caio Gomes</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green text-black ml-auto mr-4 invisible group-hover:visible md:w-14 md:h-10">
            <Play size={20} fill="black" />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10 md:text-xl">
        Tocados recentemente
      </h2>

      <div className="grid grid-cols-5 gap-4 mt-4 sm:grid-cols-1 md:grid-cols-3 md:gap-2 lg:grid-cols-3 lg:gap-2">
        {musics.map((item) => {
          return (
            <div className="bg-white/5 p-3 flex flex-col gap-2 rounded-lg hover:bg-white/10 md:p-2 md:overflow-hidden">
              <img
                src={item.src}
                className="w-full"
                width={120}
                height={120}
                alt={item.alternativo}
              />
              <strong className="font-semibold md:text-sm">{item.music}</strong>
              <span className="text-sm text-gray md:text-xs">{item.actor}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
