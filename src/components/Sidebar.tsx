import {
  ArrowRight,
  Heart,
  Home,
  Library,
  List,
  Plus,
  Search,
} from "lucide-react";
import { Separator } from "./Separator";

export function Sidebar() {
  return (
    <aside className="w-[500px] px-6 pt-6 sm:w-[90px] sm:px-2 sm:pt-2 md:w-[280px] md:px-2 md:pt-2 lg:w-[350px]">
      <div className="bg-night text-gray flex flex-col gap-y-6 p-6 font-bold rounded-xl">
        <a
          href="#"
          className="flex items-center gap-5 hover:text-white sm:gap-3 sm:text-sm"
        >
          <Home />
          <span className="sm:hidden">Início</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-5 hover:text-white"
        >
          <Search />
          <span className="sm:hidden">Buscar</span>
        </a>
      </div>

      <Separator />

      <div className="bg-night text-gray flex flex-col gap-y-5 h-auto p-6 font-bold rounded-xl">
        <div className="flex justify-between">
          <a
            href=""
            className="flex items-center gap-5 hover:text-white md:gap-2"
          >
            <Library />
            <span className="sm:hidden">Sua Biblioteca</span>
          </a>
          <div className="flex gap-x-4 sm:hidden md:gap-x-2 ">
            <Plus />
            <ArrowRight />
          </div>
        </div>

        <button
          type="button"
          className="bg-jet text-white text-xs font-normal p-1 w-16 rounded-3xl sm:hidden"
        >
          Playlists
        </button>

        <div className="flex justify-between sm:hidden">
          <Search size={20} />
          <div className="flex gap-x-1">
            <p className="text-sm">Recentes</p>
            <List size={20} />
          </div>
        </div>

        <div className="text-white font-normal cursor-pointer">
          <div className="flex items-center p-3 gap-x-3 rounded hover:bg-jet sm:hidden md:p-1 md:gap-x-2">
            <div className="h-14 w-14 bg-gradient-to-br from-purple to-white flex items-center justify-center rounded sm:hidden">
              <Heart size={20} fill="white" />
            </div>
            <div className="flex flex-col">
              <p className="text-white">Músicas Curtidas</p>
              <p className="text-gray text-sm">
                Playlist | 201 músicas
              </p>
            </div>
          </div>
          <div className="flex items-center p-3 gap-x-3 rounded hover:bg-jet sm:hidden md:p-1 md:gap-x-2">
            <img
              className="h-14 w-14 rounded"
              src="https://github.com/GomesKay.png"
            />
            <div className="flex flex-col">
              <p className="text-green">Caio Gomes</p>
              <p className="text-gray text-sm">Playlist | Caiogs</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
