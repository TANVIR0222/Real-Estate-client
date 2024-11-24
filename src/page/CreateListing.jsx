import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BiTrash } from "react-icons/bi";
import { IoIosClose, IoIosImages } from "react-icons/io";
import { FaBed, FaHome, FaMinus, FaPlus, FaUsers } from "react-icons/fa";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBoatFishing,
  GiCactus,
  GiFamilyHouse,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import Facilities from "@/components/popularCategory/Facilities";

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

const CreateListing = () => {
  const [category, setCategory] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [type, setType] = useState("");
  const [photos, setPhotos] = useState([]);

  // address / locations
  const [formLocations, setformLocations] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    country: "",
    province: "",
  });

  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    setformLocations((preve) => {
      return { ...preve, [name]: value };
    });
  };
  // console.log(formLocations);
  // console.log(amenities);

  // category
  const [guestCount, setGuestsCount] = useState(1);
  const [bedroomCount, setBedroomsCount] = useState(1);
  const [bedCount, setBedsCount] = useState(1);
  const [bathroomCount, setBathroomsCount] = useState(1);

  const handleSelectAmenities = (facilty) => {
    // console.log(facilty);
    if (amenities.includes(facilty)) {
      setAmenities((preAmenities) =>
        preAmenities.filter((option) => option !== facilty)
      );
    } else {
      setAmenities((preAmenities) => [...preAmenities, facilty]);
    }
  };

  const handleUploadePhotos = (e) => {
    const newPhoto = e.target.files;
    console.log(newPhoto);
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhoto]);
  };

  const handleDraPhoto = (result) => {
    if (!result.destination) return;
    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.destination.index, 1);
    items.splice(result.description.index, 0, reorderedItem);
    // setPhotos(items.concat(reorderedItem))
    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    // const updatedPhotos = [...photos]
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };

  // Discription
  const [formDescriptiond, setFormDescriptiond] = useState({
    title: "",
    description: "",
    price: 0,
  });

  // Discription
  const handleDiscriptionChenge = (e) => {
    const { name, value } = e.target;
    setFormDescriptiond({
      ...formDescriptiond,
      [name]: value,
    });
  };

  // console.log(formDescriptiond);

  const handlePost = (e) => {
    e.preventDefault();
  }

  return (
    <div className="mt-20">
      <div className="h3">Add Property</div>
      <form action="">
        <h4>Describe Your Property</h4>
        {/* category */}
        <div className="shadow shadow-white">
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

        {/* container type & location */}
        <div className=" flex flex-col xl:flex-row gap-x-16">
          {/* type place */}
          <h4 className="h4 my-4">What is the type of your place?</h4>
          <div className=" flex flex-col gap-y-3 md-6">
            {categoryTypes.map((item) => (
              <div
                key={item.name}
                onClick={() => setType(item.name)}
                className={`${
                  type === item.name
                    ? " ring-1 ring-slate-900/50 bg-slate-200 "
                    : " ring-1 ring-gray-200"
                } flexBetween max-w-[777px] rounded-xl px-4 py-1 `}
              >
                <div className="">
                  <h5 className="h5">{item.name}</h5>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-2xl">{item.icon}</div>
              </div>
            ))}
          </div>

          {/* place location */}
          <div className="flex-1 mb-4">
            <h4 className="h4 my-4">what's the address of your place?</h4>
            <div className="">
              {/*  */}
              <div className="">
                <h5 className="h5">Street Address:</h5>
                <input
                  onChange={handleLocationChange}
                  value={formLocations.streetAddress}
                  name="streetAddress"
                  type="text"
                  className="bg-white text-sm outline-none border-none mb-2 rounded h-10 w-80"
                  placeholder="Enter your street address"
                />
              </div>
              {/*  */}
              <div className=" flex gap-6">
                {/*  */}
                <div className="w-1/2">
                  <h5 className="h5">Apartment , Suite (opt):</h5>
                  <input
                    onChange={handleLocationChange}
                    value={formLocations.aptSuite}
                    name="aptSuite"
                    type="text"
                    className="bg-white text-sm outline-none border-none mb-2 rounded h-10"
                    placeholder="Atp , Suite (opt)"
                  />
                </div>
                {/*  */}
                <div className="w-1/2">
                  <h5 className="h5">City:</h5>
                  <input
                    onChange={handleLocationChange}
                    value={formLocations.city}
                    type="text"
                    name="city"
                    className="bg-white text-sm outline-none border-none mb-2 rounded h-10"
                    placeholder="City"
                  />
                </div>
              </div>
              {/*  */}
              <div className=" flex gap-6">
                {/*  */}
                <div className="w-1/2">
                  <h5 className="h5">Province:</h5>
                  <input
                    onChange={handleLocationChange}
                    value={formLocations.province}
                    name="province"
                    type="text"
                    className="bg-white text-sm outline-none border-none mb-2 rounded h-10"
                    placeholder="Province"
                  />
                </div>
                {/*  */}
                <div className="w-1/2">
                  <h5 className="h5">Country:</h5>
                  <input
                    onChange={handleLocationChange}
                    value={formLocations.country}
                    type="text"
                    name="country"
                    className="bg-white text-sm outline-none border-none mb-2 rounded h-10"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* essantiols */}
        <h4 className="h4 my-4">
          Provide some essential information about your place:
        </h4>
        <div className=" flex flex-wrap gap-4 mb-6">
          {/*  */}
          <div className="flex gap-x-4 ring-1 ring-slate-900/5 p-2 rounded">
            <h5>Guests</h5>
            <div className="flexCenter gap-x-4  bg-white">
              <FaMinus
                onClick={() => guestCount > 1 && setGuestsCount(guestCount - 1)}
                className="text-xl w-6 h-6 p-1 rounded cursor-pointer"
              />
              <p>{guestCount}</p>
              <FaPlus
                onClick={() => setGuestsCount(guestCount + 1)}
                className="text-xl w-6 h-6 p-1 bg-purple-700 text-white rounded cursor-pointer"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-4 ring-1 ring-slate-900/5 p-2 rounded">
            <h5>Bedrooms</h5>
            <div className="flexCenter gap-x-4  bg-white">
              <FaMinus
                onClick={() =>
                  bedroomCount > 1 && setBedroomsCount(bedroomCount - 1)
                }
                className="text-xl w-6 h-6 p-1 rounded cursor-pointer"
              />
              <p>{bedroomCount}</p>
              <FaPlus
                onClick={() => setBedroomsCount(bedroomCount + 1)}
                className="text-xl w-6 h-6 p-1 bg-purple-700 text-white rounded cursor-pointer"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-4 ring-1 ring-slate-900/5 p-2 rounded">
            <h5>Beds</h5>
            <div className="flexCenter gap-x-4  bg-white">
              <FaMinus
                onClick={() => bedCount > 1 && setBedsCount(bedCount - 1)}
                className="text-xl w-6 h-6 p-1 rounded cursor-pointer"
              />
              <p>{bedCount}</p>
              <FaPlus
                onClick={() => setBedsCount(bedCount + 1)}
                className="text-xl w-6 h-6 p-1 bg-purple-700 text-white rounded cursor-pointer"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-4 ring-1 ring-slate-900/5 p-2 rounded">
            <h5>Bathrooms</h5>
            <div className="flexCenter gap-x-4  bg-white">
              <FaMinus
                onClick={() =>
                  bathroomCount > 1 && setBathroomsCount(bathroomCount - 1)
                }
                className="text-xl w-6 h-6 p-1 rounded cursor-pointer"
              />
              <p>{bathroomCount}</p>
              <FaPlus
                onClick={() => setBathroomsCount(bathroomCount + 1)}
                className="text-xl w-6 h-6 p-1 bg-purple-700 text-white rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="my-10">
          <h4 className="h4 my-4">
            Discribe about the features of your location{" "}
          </h4>
          <ul className="flex items-center flex-wrap gap-3 mb-10">
            <Facilities
              handleSelectAmenities={handleSelectAmenities}
              amenities={amenities}
            />
          </ul>
          {/* include image */}
          <h4 className="h4 my-6">Include image showcass your property</h4>
          <DragDropContext onDragEnd={handleDraPhoto}>
            <Droppable droppableId="photo" direction="horizantal">
              {(provided) => (
                <div
                  className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-4 bg-gray-50 rounded-lg shadow-lg gap-4"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {photos.length < 1 && (
                    <>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleUploadePhotos}
                        multiple
                        id="imageUploade"
                        className="hidden"
                      />
                      <label
                        htmlFor="imageUploade"
                        className=" group flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="h-52 w-full flexCenter">
                          <IoIosImages className="text-6xl text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </div>
                        <p className=" text-gray-500 group-hover:text-gray-700">
                          Uploade form your device
                        </p>
                      </label>
                    </>
                  )}
                  {photos.length >= 1 && (
                    <>
                      {photos.map((photo, index) => (
                        <Draggable
                          key={index}
                          draggableId={index.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="relative"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <img
                                src={URL.createObjectURL(photo)}
                                alt="property"
                                className=" aspect-square object-contain h-52 w-full rounded-lg shadow-md"
                              />
                              <button
                                className="absolute top-2 right-1 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors"
                                onClick={() => handleRemovePhoto(index)}
                              >
                                <IoIosClose className="text-2xl  text-gray-500" />
                              </button>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {/*  */}
                      <input
                        type="file"
                        id="imageUploade"
                        accept="image/*"
                        onChange={handleUploadePhotos}
                        multiple
                        className="hidden"
                      />
                      <label
                        htmlFor="imageUploade"
                        className=" group flexCenter flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="h-40 w-full flexCenter">
                          <IoIosImages className="text-6xl text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </div>
                        <p className=" text-gray-500 group-hover:text-gray-700">
                          Uploade more photos
                        </p>
                      </label>
                    </>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <h4 className="h4 my-5">
            How would your characterize the charm and excitment of this
            property?
          </h4>
          <div className="">
            <h5 className="h5">Title:</h5>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formDescriptiond.title}
              onChange={handleDiscriptionChenge}
              className="bg-white p-2 border-2 text-sm outline-none border-none mb-2 w-full   rounded"
            />
            <h5 className="h5">Descriptions:</h5>
            <textarea
              name="description"
              placeholder="Description"
              rows={10}
              required
              value={formDescriptiond.description}
              onChange={handleDiscriptionChenge}
              className="bg-white p-2 border-2 text-sm outline-none border-none mb-2 w-full  resize-none  rounded"
            />
            <h5 className="h5">Price:</h5>
            <input
              type="number"
              name="price"
              placeholder="100"
              required
              value={formDescriptiond.price}
              onChange={handleDiscriptionChenge}
              className="bg-white p-2 border-2 text-sm outline-none border-none mb-2   rounded"
            />
          </div>
        </div>
        <button type="submit" className="bg-green px-4 py-2 rounded-full">
          Create Property{" "}
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
