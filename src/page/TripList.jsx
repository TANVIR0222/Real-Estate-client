import { useAllTripListQuery } from "@/app/feature/tripListApi/tripApi";
import Loading from "@/components/popularCategory/Loading";
import { useSelector } from "react-redux";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { formateDate } from "@/utils/formateDate";
import { Helmet } from "react-helmet";

const TripList = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useAllTripListQuery(user?.id);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return isLoading ? (
    <Loading />
  ) : (
    <div className=" grid grid-cols-1 md:grid-cols-2">
       <Helmet>
          <meta charSet="utf-8" />
          <title>Trip List Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      {data?.map((item) => (
        <div
          key={item._id}
          className=" gap-4 ring-1 ring-slate-900/5 w-96 md:w-[600px] place-items-start my-5 bg-white cursor-pointer p-4 rounded-[2.5rem] relative mx-4 text-left mt-16"
        >
          <Link to={`/property/${item._id}`}>
            <div>
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
            {/*  */}
            <div className="text-left max-sm:p-2 md:w-1/2 w-full">
              <h4 className="h4">{item.title}</h4>
              <div className="bold-16 pb-2">{item.category}</div>
              <h5 className="flex items-center justify-center gap-x-2 capitalize medium-15">
                <CiLocationOn className="text-2xl" /> {item.city},{" "}
                {item.Province}, {item.country}
              </h5>
              <div className="mt-2">
                <div className="flex items-center">
                  <span className="text-green  bold-22">${item.price}</span>
                  <span className="medium-14">/ nigth</span>
                </div>
                <div className="medium-15 capitalize p-1">{item.type}</div>
              </div>
              <p className=" line-clamp-4"> {item.descriptions}</p>
              <div className="flexStart gap-x-2 pt-2">
                <h5 className="bold-16">Total : </h5>
                <p className=" relative p-1">${item?.price}</p>
              </div>
              <div className="">
                <div className="">
                  <div className="flex items-center gap-x-2 pt-2">
                    <span className="relative p-1">Start Date :</span>
                    <p> {formateDate(item?.start)} </p>
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <div className="flex items-center gap-x-2 pt-2">
                    <span className="relative p-1">End Date :</span>
                    <p> {formateDate(item?.end)} </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TripList;
