import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <img className="h-[511px]" src="/about.png" alt="about-image" />
      </div>
      {/*  */}

      <div className="">
        <div className="my-8 md:pb-16">
          <h6 className=" capitalize">Form concept to reality</h6>
          <h2 className="h2">Discover oure newsst listings</h2>
        </div>

        {/*  */}

        <ul className=" space-y-3">
          {" "}
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> Access exlusive property listings{" "}
          </li>
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> Find your dream home in prime locations{" "}
          </li>
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> Seamless online property search experience{" "}
          </li>
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> Get personalized property recommendations{" "}
          </li>
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> Transparent and hassle-free transactions{" "}
          </li>
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> 24/7 customer support for all your inquiries{" "}
          </li>
          <li className="flex items-center gap-2">
            <BsCheck2Circle /> Comprehensive market analysis and reports{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
