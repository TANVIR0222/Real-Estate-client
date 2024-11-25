import { FaBed, FaHome, FaUsers } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

const categoryTypes = [
  {
    name: "Whole Home",
    description: "Enjoy complete privacy with the entire home to yourself.",
    icon: <FaHome />,
  },
  {
    name: "Private Room",
    description: "Relax in your own room while sharing common areas.",
    icon: <FaBed />,
  },
  {
    name: "Guest Suite",
    description:
      "Experience comfort in a private suite within a larger property.",
    icon: <GiFamilyHouse />,
  },
  {
    name: "Shared Apartment",
    description: "Stay in a cozy apartment with shared facilities.",
    icon: <FaUsers />,
  },
];

const CategoryType = ({ setType , type }) => {
  return (
    <div>
      {categoryTypes.map((item) => (
        <div
          key={item.name}
          onClick={() => setType(item.name)}
          className={`${
            type === item.name
              ? " ring-1 ring-slate-900/50 bg-slate-200 "
              : " ring-1 ring-gray-200"
          } flexBetween max-w-[777px] rounded-xl px-4 py-1 my-4 `}
        >
          <div className="">
            <h5 className="h5">{item.name}</h5>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
          <div className="text-2xl">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryType;
