import Autoplay from "embla-carousel-autoplay";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddFavoiteMutation } from "@/app/feature/bookingApi/bookingApi";

const ListCart = ({ property }) => {
  const {
    _id,
    category,
    type,
    city,
    Province,
    country,
    listingPhotoPath,
    title,
    descriptions,
    price,
  } = property;
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [amenitie, setAmenitie] = useState(false);
  const handleAdd = () => {
    setAmenitie(!amenitie);
  };

  const { user } = useSelector((state) => state.auth);
  const [addFavoite] = useAddFavoiteMutation();

  const handleSelectAmenities = async (id) => {
    try {
      const data = {
        userId: user?.id,
        propertyId: id,
        category: category,
        type: type,
        city: city,
        Province: Province,
        country: country,
        listingPhotoPath: listingPhotoPath,
        title: title,
        descriptions: descriptions,
        price: price,
      };

     const res = await addFavoite(data).unwrap();
     console.log(res.message);
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <div className=" gap-4 ring-1 ring-slate-900/5 w-96 md:w-[600px] place-items-start my-5 bg-white cursor-pointer p-4 rounded-[2.5rem] relative mx-4">
      {/* <Link to={`/property/${_id}`}> */}
      <div className="flex gap-4">
        <div className="md:w-1/2 w-full">
          {
            <Carousel
              plugins={[plugin.current]}
              className=" items-center  justify-center mx-auto "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {listingPhotoPath?.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <img
                        src={photo}
                        className="rounded-md w-52 h-52  relative"
                        alt=""
                      />

                      <div
                        onClick={handleAdd}
                        className=" absolute top-0  p-2 bg-red-500 rounded-full bg-white"
                      >
                        {amenitie ? (
                          <FaHeart className="text-xl text-red " />
                        ) : (
                          <CiHeart
                            className="text-xl"
                            onClick={() => handleSelectAmenities(_id)}
                          />
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          }
        </div>
        {/*  */}
        <div className="text-left max-sm:p-2 md:w-1/2 w-full">
          <Link to={`/property/${_id}`}>
            <h4 className="h4">{title}</h4>
            <div className="bold-16 pb-2">{category}</div>
            <h5 className="flex items-center justify-center gap-x-2 capitalize medium-15">
              <CiLocationOn className="text-2xl" /> {city}, {Province},{" "}
              {country}
            </h5>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="text-green  bold-22">${price}</span>
                <span className="medium-14">/ nigth</span>
              </div>
              <div className="medium-15 capitalize p-1">{type}</div>
            </div>
            <p className=" line-clamp-4"> {descriptions}</p>
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ListCart;
