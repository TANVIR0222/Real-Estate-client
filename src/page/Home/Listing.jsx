import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBoatFishing, GiCactus, GiIsland, GiWindmill } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { MdOutlineVilla } from "react-icons/md";

const categories = [
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

const Listing = () => {
  return (
    <div className="pb-16 text-center items-center">
      <div className="text-center pb-16">
        <h6 className=" capitalize">Few steps to your new home</h6>
        <h2 className="h2">Discover oure newsst listings</h2>
      </div>

      {/* category */}
      <div className="mx-2 md:mx-32 shadow shadow-white">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white">
          <div className="flex gap-4  p-5 ">
            {categories.map((artwork) => (
              <figure key={artwork.label} className={`shrink-0 mx-auto`}>
                <div className="overflow-hidden  rounded-full h-15 w-15">
                  <div
                    className="items-center text-center flex p-2  justify-center"
                    style={{ backgroundColor: `${artwork.color}` }}
                  >
                    {artwork.icon}
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {artwork.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Listing;
