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
  return (
    <div className="h-screen m space-y-10  flex flex-col md:flex-row items-center justify-between gap-10 bg-primarybg">
      <div className="w-full md:w-1/2 space-y-5 md:space-y-10 mt-16 md:mt-1 mx-1">
        <h1 className="text-3xl font-bold md:text-5xl">
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
          <a className="bg-green p-4 rounded-full" href="">
            Explore Properties
          </a>
          <a className="bg-black text-white p-4 rounded-full" href="">
            + Add Properties
          </a>
        </div>

        <div className="flex">
          <img
            className="w-20 h-20 border-2 border-red  rounded-full"
            src="/testimonial1.png"
            alt=""
          />
          <img
            className="w-20 h-20 border-2 -ml-4 border-red  rounded-full"
            src="/testimonial2.png"
            alt=""
          />
          <img
            className="w-20 h-20 border-2 -ml-4 border-red  rounded-full"
            src="/testimonial3.png"
            alt=""
          />
        </div>
      </div>

      {/* image sections */}

      <div className="w-full md:w-1/2 ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full "
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

      {/* <div className="">
        <img className="rounded-lg  text-center items-center mx-auto justify-center flex" src="/sideImg.png" alt="" />
        <div className="flex gap-10">
          <img className="w-64 rounded-lg" src="/sideImg1.png" alt="" />
          <img className="w-64 rounded-lg" src="/sideImg2.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Banner;

/*

<Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>




*/
