import { musics } from "../musics";
import {
  CheckCircle2,
  LayoutList,
  Maximize2,
  Play,
  PlaySquare,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SquareUser,
  Volume2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black p-6 flex items-center justify-between sm:p-4 md:p-4">
      <div className="flex items-center gap-3 md:gap-2">
        <img
          className="rounded"
          src={musics[0].src}
          width={56}
          height={56}
          alt="Capa do Memory Reboot"
        />
        <div className="flex flex-col">
          <strong className="font-normal sm:text-sm md:text-sm">
            {musics[0].music}
          </strong>
          <span className="text-xs text-gray">{musics[0].actor}</span>
        </div>
        <CheckCircle2 className="text-black sm:hidden" fill="#1ED760" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6 sm:gap-4 md:gap-4">
          <Shuffle size={20} className="text-gray" />
          <SkipBack size={20} className="text-gray" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play size={24} fill="black" />
          </button>

          <SkipForward size={20} className="text-gray" />
          <Repeat size={20} className="text-gray" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray">2:00</span>
          <div className="h-1 rounded-full w-96 bg-gray/40 sm:w-32 md:w-60">
            <div className="bg-white w-72 h-1 rounded-full sm:w-28 md:w-52" />
          </div>
          <span className="text-xs text-gray">2:44</span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-2">
        <PlaySquare className="text-green sm:hidden" size={20} />
        <LayoutList className="sm:hidden" size={20} />
        <SquareUser className="sm:hidden" size={20} />
        <div className="flex items-center gap-2">
          <Volume2 className="sm:hidden" size={20} />
          <div className="h-1 rounded-full w-20 bg-gray/40 sm:hidden">
            <div className="bg-white w-16 h-1 rounded-full sm:hidden" />
          </div>
          <Maximize2 className="sm:hidden" size={20} />
        </div>
      </div>
    </footer>
  );
}
