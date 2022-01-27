//Required imports

import PromisedLandImg from "../assets/books/promised land.jpg";
import LawsOfPowerImg from "../assets/books/laws of power.jpg";
import IkiagaiImg from "../assets/books/ikiagai.jpg";
import DrunkImg from "../assets/books/drunk.jpeg";
import UnbowedImg from "../assets/books/Unbowed.jpg";
import MorningClubImg from "../assets/books/morningclub.jpeg";
import WillImg from "../assets/books/will.jpg";
import AtomicImg from "../assets/books/atomic habits.jpg";
import RainbowFishImg from "../assets/books/rainbow fish.jfif";
import FamiliarMathImg from "../assets/books/familiarmath.jpg";
import SapiensImg from "../assets/books/sapiens.jpg";
import YellowSunImg from "../assets/books/yellow sun.jpg";
import ShouldIImg from "../assets/books/should-i.jpeg";

export const Books = [
  {
    name: "A Promised Land",
    author: "Barack Obama",
    category: "biography",
    booklink: "/promised-land",
    description:
      "A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy. In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil. Obama takes readers on a compelling journey from his earliest political aspirations to the pivotal Iowa caucus victory that demonstrated the power of grassroots activism to the watershed night of November 4, 2008, when he was elected 44th president of the United States, becoming the first African American to hold the nation’s highest office.",
    src: PromisedLandImg,
    popular: true,
    price: 1000,
    id: 0,
  },
  {
    name: "Drunk",
    author: "Jackson Biko",
    category: "novels",
    booklink: "/drunk",
    description:
      "It starts with a girl. Girls actually. Its only fair that it starts with a girl, no? Only problem is that most stories that start with a girl always end up with someone banging on the door saying; I just want to talk. This is not one of those stories. This one is about Larry. Mad Larry. He drinks. He shags girls. He hates his father. And he looks nothing like his step brother, who stays by his side throughout his madness. When Larry does something terrible, it looms over him, shaping his future, transforming all the relationships around him and hurtling him into a rabbit hole. Oh, and wheelbarrows are involved. Five of them. Somehow Larry and one of these wheelbarrows will collide and things will get pretty hairy - for Larry, that is, not for you, dear reader.",
    src: DrunkImg,
    popular: true,
    price: 1000,
    id: 1,
  },
  {
    name: "Unbowed",
    author: "Wangari Maathai",
    category: "biography",
    src: UnbowedImg,
    popular: true,
    price: 1000,
    id: 2,
  },
  {
    name: "The 5A.M Club",
    author: "Robbin Sharma",
    category: "personalgrowth",
    src: MorningClubImg,
    popular: true,
    price: 1000,
    id: 3,
  },
  {
    name: "Will",
    author: "Will Smith",
    category: "biography",
    src: WillImg,
    popular: true,
    price: 1000,
    id: 4,
  },
  {
    name: "The 48 Laws of Power",
    author: "Robert Green",
    category: "nonfiction",
    src: LawsOfPowerImg,
    popular: true,
    price: 1200,
    id: 5,
  },
  {
    name: "Ikiagai",
    author: "Hector Gracia",
    category: "personalgrowth",
    src: IkiagaiImg,
    popular: false,
    price: 800,
    id: 6,
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    category: "personalgrowth",
    src: AtomicImg,
    popular: true,
    price: 800,
    id: 7,
  },
  {
    name: "Rainbow Fish",
    author: "Marcus PFister",
    category: "children",
    src: RainbowFishImg,
    popular: false,
    price: 800,
    id: 8,
  },
  {
    name: "K.C.S.E Made Familiar Math",
    author: "Caroline Njenga",
    category: "textbook",
    src: FamiliarMathImg,
    popular: false,
    price: 800,
    id: 9,
  },
  {
    name: "Sapiens",
    author: "Noah Yuval",
    category: "nonfiction",
    src: SapiensImg,
    popular: true,
    price: 800,
    id: 10,
  },
  {
    name: "Half A Yellow Sun",
    author: "Chimamanda Ngozi",
    category: "novels",
    src: YellowSunImg,
    popular: false,
    price: 800,
    id: 11,
  },
  {
    name: "Should I",
    author: "Florence Bett",
    category: "nonfiction",
    src: ShouldIImg,
    popular: false,
    price: 800,
    id: 12,
  },
];
