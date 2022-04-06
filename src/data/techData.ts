import { ITech } from "../models/model"
import tabLaunch from "../assets/technology/image-launch-vehicle-landscape.jpg";
import deskLaunch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import tabSpace from "../assets/technology/image-space-capsule-landscape.jpg";
import deskSpace from "../assets/technology/image-space-capsule-portrait.jpg";
import tabPort from "../assets/technology/image-spaceport-landscape.jpg";
import deskPort from "../assets/technology/image-spaceport-portrait.jpg";


const techData: ITech[] = [
  {
    id: 1,
    heading: "LAUNCH VEHICLE",
    imgDesktop: deskLaunch,
    imgMobile: tabLaunch,
    body: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    heading: "SPACEPORT",
    imgDesktop: deskPort,
    imgMobile: tabPort,
    body: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    heading: "SPACE CAPSULE",
    imgDesktop: deskSpace,
    imgMobile: tabSpace,
    body: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];


export const getTechData= ():ITech[] => {
    return techData
}