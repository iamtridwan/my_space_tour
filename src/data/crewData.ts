import { ICrew } from "../models/model";
import doug from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import Anousheh from "../assets/crew/image-anousheh-ansari.png";

const crewData: ICrew[] = [
  {
    id: 1,
    full_name: "Douglas Hurley",
    job_title: "Commander ",
    history:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: doug,
  },
  {
    id: 2,
    full_name: "MARK SHUTTLEWORTH",
    job_title: "Mission Specialist ",
    history:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: mark,
  },
  {
    id: 3,
    full_name: "Victor Glover",
    job_title: "PILOT",
    history:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: victor,
  },
  {
    id: 4,
    full_name: "Anousheh Ansari",
    job_title: "Flight Engineer",
    history:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: Anousheh,
  },
];

export const getCrewData = (): ICrew[] => {
  return crewData;
};
