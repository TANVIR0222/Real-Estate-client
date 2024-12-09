import { useBookingDeleteMutation, useFavoritePropertyQuery } from "@/app/feature/bookingApi/bookingApi";
import Loading from "@/components/popularCategory/Loading";
import { AiOutlineDelete } from "react-icons/ai";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const WishList = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useFavoritePropertyQuery(user?.id);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [bookingDelete] = useBookingDeleteMutation(); 

  const  handleDelete =async (id) =>{
   
    try {
      await bookingDelete(id).unwrap();
      alert('delete success')

    } catch (error) {
      alert(error?.data?.message)
    }
    
  } 

  return isLoading ? (
    <Loading />
  ) : (
    <div className=" grid grid-cols-1 md:grid-cols-2">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Wish List page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      {data?.map((item) => (
        <div
          key={item._id}
          className=" gap-4 ring-1 ring-slate-900/5 w-96 md:w-[600px] place-items-start my-5 bg-white cursor-pointer p-4 rounded-[2.5rem] relative mx-4 text-left mt-16"
        >
          <Link to={`/property/${item.propertyId}`}>
            <div className="">
              {
                <Carousel
                  plugins={[plugin.current]}
                  className=" items-center  justify-center mx-auto "
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {item?.listingPhotoPath?.map((photo, index) => (
                      <CarouselItem key={index}>
                        <div className="">
                          <img
                            src={photo}
                            className="rounded-md   relative"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              }
            </div>
          </Link>

          {/*  */}
          <AiOutlineDelete onClick={() => handleDelete(item._id)} className="text-3xl my-3 text-rose-500" />
          <Link to={`/property/${item.propertyId}`}>
            <div className="text-left max-sm:p-2 md:w-1/2 w-full">
              <h4 className="h4 flex items-center">{item?.title}</h4>
              <div className="bold-16 pb-2">{item?.category}</div>
              <h5 className="flex items-center justify-center gap-x-2 capitalize medium-15">
                <CiLocationOn className="text-2xl" /> {item?.city},{" "}
                {item?.Province}, {item?.country}
              </h5>
              <div className="mt-2">
                <div className="flex items-center">
                  <span className="text-green  bold-22">${item?.price}</span>
                  <span className="medium-14">/ nigth</span>
                </div>
                <div className="medium-15 capitalize p-1">{item?.type}</div>
              </div>
              <p className=" line-clamp-4"> {item?.descriptions}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WishList;
