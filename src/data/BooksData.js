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
import BecomingImg from "../assets/books/becoming.jpg";

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
    name: "Becoming",
    author: "Michelle Obama",
    category: "biography",
    description:
      "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same.",
    src: BecomingImg,
    popular: true,
    price: 1100,
    id: 0.1,
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
    description:
      "Hugely charismatic, humble, and possessed of preternatural luminosity of spirit, Wangari Maathai, the winner of the 2004 Nobel Peace Prize and a single mother of three, recounts her extraordinary life as a political activist, feminist, and environmentalist in Kenya. Born in a rural village in 1940, Wangari Maathai was already an iconoclast as a child, determined to get an education even though most girls were uneducated. We see her studying with Catholic missionaries, earning bachelor’s and master’s degrees in the United States, and becoming the first woman both to earn a PhD in East and Central Africa and to head a university department in Kenya. We witness her numerous run-ins with the brutal Moi government...",
    src: UnbowedImg,
    popular: true,
    price: 1000,
    id: 2,
  },
  {
    name: "The 5A.M Club",
    author: "Robbin Sharma",
    category: "personalgrowth",
    description:
      "Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity. Now, in this life-changing book, handcrafted by the author over a rigorous four-year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness.",
    src: MorningClubImg,
    popular: true,
    price: 1000,
    id: 3,
  },
  {
    name: "Will",
    author: "Will Smith",
    category: "biography",
    description:
      "“It’s easy to maneuver the material world once you have conquered your own mind. I believe that. Once you've learned the terrain of your own mind, every experience, every emotion, every circumstance, whether positive or negative, simply propels you forward, to greater growth and greater experience. That is true will. To move forward in spite of anything. And to move forward in a way that brings others with you, rather than leave them behind.” —Will Smith",
    src: WillImg,
    popular: true,
    price: 1000,
    id: 4,
  },
  {
    name: "The 48 Laws of Power",
    author: "Robert Green",
    category: "nonfiction",
    description:
      "This amoral, cunning, ruthless, and instructive book synthesizes the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz with the historical legacies of statesmen, warriors, seducers, and con men throughout the ages",
    src: LawsOfPowerImg,
    popular: true,
    price: 1200,
    id: 5,
  },
  {
    name: "Ikiagai",
    author: "Hector Gracia",
    category: "personalgrowth",
    description:
      "The people of Japan believe that everyone has an ikigai – a reason to jump out of bed each morning. And according to the residents of the Japanese island of Okinawa – the world’s longest-living people – finding it is the key to a longer and more fulfilled life. Inspiring and comforting, this book will give you the life-changing tools to uncover your personal ikigai. It will show you how to leave urgency behind, find your purpose, nurture friendships and throw yourself into your passions. Bring meaning and joy to your every day with ikigai.",
    src: IkiagaiImg,
    popular: false,
    price: 800,
    id: 6,
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    category: "personalgrowth",
    description:
      "This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.",
    src: AtomicImg,
    popular: true,
    price: 800,
    id: 7,
  },
  {
    name: "Rainbow Fish",
    author: "Marcus PFister",
    category: "children",
    description:
      "Eye-catching foil stamping, glittering on every page, offers instant child appeal, but it is the universal message at the heart of this simple story about a beautiful fish who learns to make friends by sharing his most prized possessions that gives the book its lasting value.",
    src: RainbowFishImg,
    popular: false,
    price: 800,
    id: 8,
  },
  {
    name: "K.C.S.E Made Familiar Math",
    author: "Caroline Njenga",
    category: "textbook",
    description:
      "KC.S.E Made Familiar workbooks are a series of revision books meant to make K.C.S.E. familiar to leamers.",
    src: FamiliarMathImg,
    popular: false,
    price: 800,
    id: 9,
  },
  {
    name: "Sapiens",
    author: "Noah Yuval",
    category: "nonfiction",
    description:
      "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come? In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions.",
    src: SapiensImg,
    popular: true,
    price: 800,
    id: 10,
  },
  {
    name: "Half A Yellow Sun",
    author: "Chimamanda Ngozi",
    category: "novels",
    description:
      "'Heartbreaking, funny, exquisitely written and, without doubt, a literary masterpiece and a classic Daily Mail In 1960s Nigeria, Ugwo, a boy from a poor Village. goes to work for Odenigbo, a radical university professor. Soon they are joined by Olanna, a young woman who has abandoned a life of privilege to live with her charismatic lover. Into their world comes Richard, an English writer who has fallen for Olamia's sharp-tongued twin sister Kainene. But when the shocking horror of civil war engulfs the nation, their loves and loyalties are severely tested, while their lines pull apart and collide once again in ways none of them could have imagined...",
    src: YellowSunImg,
    popular: false,
    price: 800,
    id: 11,
  },
  {
    name: "Should I",
    author: "Florence Bett",
    category: "nonfiction",
    description:
      "You are in your 20s or 30s, You are working hard growing a decent career in your job or business. Making your own money. It`s all good. This is, you are expected to already know what to do with this money. Granted you know how to spend it buying things- hell, everybody does- but you don't know how to budget, save or invest it. Should I? Responds to these lingering questions about your personal finance. Questions such as, What should I know before joining a Sacco? Should a rookie like me put money in shares? Why am I so insecure when I dont have enough money? How am I always broke before my next payday? Should I borrow money from my woman? Bett is a certified accountant, a small business owner and a former financial auditor. She is also a personal finance columnist with Daily Nations Newspaper. Bett has drown from her personal experience and from engagements with her readers, to respond to your questions about how to make money and manage it smarter.",
    src: ShouldIImg,
    popular: false,
    price: 800,
    id: 12,
  },
];
