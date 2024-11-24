import {
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
} from "react-icons/bi";
import { BsSnow, BsPersonWorkspace } from "react-icons/bs";
import {
  MdMicrowave,
  MdBalcony,
  MdYard,
  MdPets,
} from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";

import { AiFillCar } from "react-icons/ai";

const facilities = [
  {
    name: "Luxury Bathtub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Premium Care Essentials",
    icon: <FaPumpSoap />,
  },
  {
    name: "Al Fresco Shower",
    icon: <FaShower />,
  },
  {
    name: "Efficient Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "High-Performance Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Clothing Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Ironing Essentials",
    icon: <TbIroning3 />,
  },
  {
    name: "Smart TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Home Office Space",
    icon: <BsPersonWorkspace />,
  },
  {
    name: "Climate Control - AC",
    icon: <BsSnow />,
  },
  {
    name: "Central Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Surveillance Cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Safety Fire Extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "Emergency First Aid Kit",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "High-Speed Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Complete Cooking Set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Large Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave Oven",
    icon: <MdMicrowave />,
  },
  {
    name: "Electric Stove",
    icon: <GiToaster />,
  },
  {
    name: "Outdoor BBQ Grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Open-Air Dining",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private Terrace/Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Campfire Experience",
    icon: <GiCampfire />,
  },
  {
    name: "Lush Garden",
    icon: <MdYard />,
  },
  {
    name: "Complimentary Parking",
    icon: <AiFillCar />,
  },
  {
    name: "Contactless Check-In",
    icon: <FaKey />,
  },
  {
    name: "Pet-Friendly Space",
    icon: <MdPets />,
  },
];
const Facilities = ({ handleSelectAmenities , amenities}) => {
  return (
    <div className="flex items-center flex-wrap gap-3 mb-10 ">
      {facilities.map((cart) => (
        <div
          onClick={() => handleSelectAmenities(cart.name)}
          key={cart.name}
          className={` ${amenities.includes(cart.name) ? 'ring-1 ring-purple-700' : 'ring-1 ring-slate-900/5' } flex items-center gap-3 bg-white p-4 rounded cursor-default `}
        >
          <div className="">{cart.icon}</div>
          <p className="text-lg font-bold">{cart.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
