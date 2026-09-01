import jufofuCover from "../assets/jufofu.png";
import type { Products } from "../types";

export default function getProducts(): Products {
  return {
    title: "Jufofu - Block Puzzle Rush",
    date: "13 July 2026",
    imgSrc: jufofuCover,
    content: `
        Correct and fast paced. No pay-to-win. A rush of puzzles full
        of strategy, combos and chaos! Trigger chain reactions by 
        building clean lines, good plays, and watch satisfying number
        effects explode across the board. It's more than a match game
          - it's a test of foresight and creativity.`,
    link: "",
  };
}
