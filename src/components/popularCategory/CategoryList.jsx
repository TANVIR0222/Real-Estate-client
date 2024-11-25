import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBoatFishing, GiCactus, GiIsland, GiWindmill } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
const CategoryList = ({ setCategory, category }) => {
  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white">
        <div className="flex gap-4  p-5 cursor-pointer ">
          {categories.map((item) => (
            <figure
              onClick={() => setCategory(item.label)}
              key={item.label}
              className={`shrink-0 mx-auto`}
            >
              <div className="overflow-hidden  rounded-full h-15 w-15">
                <div
                  className="items-center text-center flex p-2  justify-center"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  {item.icon}
                </div>
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span
                  className={`${
                    category === item.label
                      ? "text-purple-500 "
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryList;
