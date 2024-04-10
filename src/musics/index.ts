import memoryImg from "../assets/memory-reboot.jpg";
import nextImg from "../assets/next-to-you.jpeg";
import diamondzImg from "../assets/diamondz-roses.jpeg";
import stereoImg from "../assets/stereo-love.jpeg";
import palaceImg from "../assets/palace.jpeg";

interface musicsProps {
  src: string;
  alternativo: string;
  music: string;
  actor: string;
}

export const musics: musicsProps[] = [
  {
    src: memoryImg,
    alternativo: "Capa Memory Reboot",
    music: "Memory Reboot",
    actor: "VØJ, Narvent",
  },
  {
    src: nextImg,
    alternativo: "Capa Next to You",
    music: "next to you (Slowed + Reverb)",
    actor: "Øneheart",
  },
  {
    src: diamondzImg,
    alternativo: "Capa Diamond d Roses",
    music: "Diamondz n Roses",
    actor: "VaporGod",
  },
  {
    src: stereoImg,
    alternativo: "Capa Stereo Love",
    music: "Stereo Love",
    actor: "Fewtile",
  },
  {
    src: palaceImg,
    alternativo: "Capa Palace",
    music: "Palace",
    actor: "ADTurnUp",
  },
];
