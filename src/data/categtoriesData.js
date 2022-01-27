//Required imports
import { HiTrendingUp } from "react-icons/hi";
import { AiOutlineAccountBook } from "react-icons/ai";
import { FaFantasyFlightGames } from "react-icons/fa";
import { GiUnicorn, GiSwordwoman } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";

export const categoriesData = [
  {
    name: "Personal Growth",
    src: HiTrendingUp,
    link: "/personal-growth",
    id: 0,
  },
  {
    name: "Non Fiction",
    src: AiOutlineAccountBook,
    link: "/non-fiction",
    id: 1,
  },
  {
    name: "Novels",
    src: FaFantasyFlightGames,
    link: "/novels",
    id: 2,
  },
  {
    name: "Chldren Books",
    src: GiUnicorn,
    link: "/children-books",
    id: 3,
  },
  {
    name: "Biographies",
    src: GiSwordwoman,
    link: "/biographies",
    id: 4,
  },
  {
    name: "Textbooks",
    src: IoSchoolOutline,
    link: "/textbooks",
    id: 5,
  },
];
