import { useSingleCategoryPropertyQuery } from "@/app/feature/propertyApi/propertyApi";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPersonShelter } from "react-icons/fa6";
import { MdBed, MdBathroom, MdBathtub } from "react-icons/md";
import { useSelector } from "react-redux";
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
import { MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
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

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { useAddTripListMutation } from "@/app/feature/tripListApi/tripApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const PropertyView = () => {
  const { id } = useParams();

  const { data: property, isLoading } = useSingleCategoryPropertyQuery(id);
  const { user } = useSelector((state) => state.auth);  
  const [selectDate, setSelectDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (item) => {
    setSelectDate([item.selection]);
  };

  const start = new Date(selectDate[0].startDate);
  const end = new Date(selectDate[0].endDate);
  const dayCount = Math.round(end - start) / (1000 * 60 * 60 * 24);
  const [addTripList, { isLoading: tripListLoading, refatch }] =
    useAddTripListMutation();
  
    // console.log(property?.hidden);
    

  const handleAdd = async () => {
    if (dayCount < 1) {
      return alert("Please select a date range");
    }

    const data = {
      userId: user?.id,
      propertyId: id,
      category: property?.category,
      type: property?.type,
      city: property?.city,
      Province: property?.Province,
      country: property?.country,
      listingPhotoPath: property?.listingPhotoPath,
      title: property?.title,
      descriptions: property?.descriptions,
      price: property?.price,
      start: start,
      end: end,
      dayCount: dayCount,
    };
    try {
      const res = await addTripList(data).unwrap();
      if (res.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Trip List add successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col-reverse md:flex-row ">
       <Helmet>
          <meta charSet="utf-8" />
          <title>Property View page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <div className="max-padd-container flex flex-col-reverse gap-12 xl:flex-row py-10 mt-16 md:w-1/2 w-full">
        {/* left */}
        <div className="flex-1">
          <div className="">
            <h3 className="h3">{property?.title} </h3>
            <div className=" flex items-center gap-x-1 pb-1">
              <span>
                <HiOutlineLocationMarker />{" "}
              </span>
              <p>
                {property?.type} in {property?.city}, {property?.Province},
                {property?.country}{" "}
              </p>
            </div>
            <div className=" flex items-center gap-4 capitalize pt-5">
              {/*  */}
              <span>
                <FaPersonShelter className="text-xl" />
                <p className="pt-2">{property?.guestCount} guests</p>
              </span>
              {/*  */}
              <span>
                <MdBathroom className="text-xl" />
                <p className="pt-2">{property?.bedroomCount} bedrooms</p>
              </span>
              {/*  */}
              <span>
                <MdBed className="text-xl" />
                <p className="pt-2">{property?.bedCount} beds</p>
              </span>
              {/*  */}
              <span>
                <MdBathtub className="text-xl" />
                <p className="pt-2">{property?.bathroomCount} bathrooms</p>
              </span>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-x-3 py-6">
            <img src={user?.profileImage} className="w-16 h-16 rounded-full" alt="" />
            <h5 className="medium-14 capitalize">
              {" "}
              Hosted by {user?.firstname} {user?.lastname}
            </h5>
          </div>
          <p className="pb-3">{property?.descriptions} </p>
          {/* amenities */}
          <div className="">
            <h4 className="h4 py-3">What this place offers?</h4>
            <ul className=" flex flex-wrap gap-3">
              {property?.amenities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-white right-1 ring-slate-900/5 p-4 rounded-md"
                >
                  <div className="">
                    {facilities.find((f) => f.name === item)?.icon}
                  </div>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/*  */}
          <h4 className="h4 py-3 my-2">How long do you want to stay?</h4>
          <DateRange
            className="w-96"
            ranges={selectDate}
            onChange={handleSelect}
          />
          {/*  */}
          <div className="flexStart gap-4 flex-wrap py-7">
            <div className="">
              {dayCount > 1 ? (
                <div className="flexStart gap-x-2 pt-2">
                  <h5 className="bold-16">Total Stay :</h5>
                  <p className=" relative p-1">
                    $ {property?.price} x {dayCount} nigths
                  </p>
                </div>
              ) : (
                <div className="flexStart gap-x-2 pt-2">
                  <h5 className="bold-16">Total Stay : </h5>
                  <p className=" relative p-1">
                    ${property?.price} x {dayCount} nigth
                  </p>
                </div>
              )}
              <div className="flexStart gap-x-2 pt-2">
                <h5 className="bold-16">Total Price :</h5>
                <p className=" relative p-1">
                  ${property?.price * dayCount} nigth
                </p>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="">
                <div className="flex items-center gap-x-2 pt-2">
                  <span className="relative p-1">Start Date :</span>
                  <p> {selectDate[0].startDate.toDateString()} </p>
                </div>
              </div>
              {/*  */}
              <div className="">
                <div className="flex items-center gap-x-2 pt-2">
                  <span className="relative p-1">End Date :</span>
                  <p> {selectDate[0].endDate.toDateString()} </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <button
            onClick={handleAdd}
            type="submit"
            className={`bg-green rounded-full flexCenter w-48 px-4 py-2 capitalize`}
          >
            {tripListLoading ? <p>Loading...</p> : " Book the visite"}
          </button>
        </div>
      </div>
      {/* view image  */}
      <div className="flex-1">
        <div className=" flex flex-wrap mt-16">
          {property?.listingPhotoPath.map((item, index) => (
            <div
              key={index}
              className={`${index === 0 ? "w-full" : "w-1/2"} p-2`}
            >
              <img
                src={item}
                alt="property"
                className={`max-w-full ${
                  index === 0 ? " object-contain rounded-3xl" : " rounded-2xl"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyView;
