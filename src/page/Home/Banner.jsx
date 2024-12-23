import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

// import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";

const cards = [
  {
    id: 1,

    image: "/sideImg2.png",
  },
  {
    id: 2,

    image: "/sideImg1.png",
  },
  {
    id: 3,

    image: "/sideImg2.png",
  },
];

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" space-y-10  grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 bg-primarybg">
      <div className="space-y-5 md:space-y-10  md:mt-1 mx-1 ">
        <h1 className="text-3xl font-bold md:text-5xl mt-16">
          Invest in <span className=" text-green">Your Future</span> with
          confidence
        </h1>
        <p className="text-secondary">
          And, when guests let us know they’re traveling for work by using the
          work trip toggle, their search results will focus on listings that are
          more relevant for business trips. Searchers will see and be able to
          book work-friendly places to stay, including entire homes, Airbnb Plus
          homes that are verified for quality and design, and boutique hotels.
          This new way to find work-friendly places to stay includes those that
          meet increased quality standards by showcasing listings that have
          received positive ratings from business travelers, and where hosts
          have indicated there are smoke and carbon monoxide detectors
        </p>
        <div className="gap-4 flex">
          <a className="bg-green p-4 text-sm md:text-xl rounded-full animate-bounce" href="">
            Explore Properties
          </a>
          {user ? (
            <a
              className="bg-black text-white text-sm md:text-xl p-4 rounded-full"
              href="/create-List"
            >
              + Add Properties
            </a>
          ) : (
            <a
              className="bg-black text-white text-sm md:text-xl p-4 rounded-full"
              href="/login"
            >
              + Add Properties
            </a>
          )}
        </div>

        <div className="flex">
          <img
            className="w-20 h-20 border-2 border-red  rounded-full"
            src="/user.jpg"
            alt=""
          />
          <img
            className="w-20 h-20 border-2 -ml-4 border-red  rounded-full"
            src="/user1.jpg"
            alt=""
          />
          <img
            className="w-20 h-20 border-2 -ml-4 border-red  rounded-full"
            src="/user2.jpg"
            alt=""
          />
        </div>
      </div>

      {/* image sections */}

      <div className=" ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mt-1 md:mt-16 "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {cards.map((item) => (
              <CarouselItem key={item.id}>
                <div className="rounded-lg  w-96	md:w-[550px] md:h-[550px] ">
                  <img
                    className="rounded-lg  w-96	md:w-[550px] md:h-[550px] "
                    src={item.image}
                    alt=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
