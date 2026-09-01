import sample from "../assets/news-img-sample.png";
import type { News } from "../types";

export default function getNews(): News[] {
  return [
    {
      title: "New site is now live !",
      date: "13 July 2026",
      imgSrc: sample,
      content: `
        The summer update, now available for free, presents the Tibia community 
        with one of its greatest challenges to date: The toughest bosses in the 
        game's 29-year history await players at the end of a new quest. True to 
        an MMORPG with no level cap, their difficulty can be ramped up infinitely. 
        This means that the bosses not only gain more health points, but the 
        battles also become more challenging through additional game mechanics.`,
    },
    {
      title: "New site is now live !",
      date: "13 July 2026",
      imgSrc: sample,
      content: `
        The summer update, now available for free, presents the Tibia community 
        with one of its greatest challenges to date: The toughest bosses in the 
        game's 29-year history await players at the end of a new quest. True to 
        an MMORPG with no level cap, their difficulty can be ramped up infinitely. 
        This means that the bosses not only gain more health points, but the 
        battles also become more challenging through additional game mechanics.`,
    },
  ];
}
