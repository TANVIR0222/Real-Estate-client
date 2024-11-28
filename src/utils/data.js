import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBoatFishing, GiCactus, GiIsland, GiWindmill } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import { BiWorld } from "react-icons/bi";


export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Our Menu",
    path: "/shop",
  },
  {
    id: 3,
    title: "Abouts",
    path: "/about",
  },
  {
    id: 4,
    title: "Contact us",
    path: "/contact",
  },
];

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
    color: "#bfdbfe", // blue-200
  },
  {
    label: "Urban Area",
    icon: <MdOutlineVilla />,
    color: "#ffe4b5", // light beige
  },
  {
    label: "Seaside",
    icon: <TbBeach />,
    color: "#e9d5ff", // purple-200
  },
  {
    label: "Wind Farm",
    icon: <GiWindmill />,
    color: "#d1fae5", // green-200
  },
  {
    label: "Rural Area",
    icon: <TbMountain />,
    color: "#ccfbf1", // teal-200
  },
  {
    label: "Desert Retreat",
    icon: <GiCactus />, // Example icon
    color: "#e5e7eb", // gray-200
  },
  {
    label: "Private Island",
    icon: <GiIsland />,
    color: "#e0e7ff", // indigo-200
  },
  {
    label: "Ski Resorts",
    icon: <FaSkiing />,
    color: "#fef3c7", // yellow-200
  },
  {
    label: "Luxury Pools",
    icon: <TbPool />,
    color: "#cffafe", // cyan-200
  },
  {
    label: "Lakeside",
    icon: <GiBoatFishing />,
    color: "#bfdbfe", // blue-200
  },
];
