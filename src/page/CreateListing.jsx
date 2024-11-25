import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { IoIosClose, IoIosImages } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Facilities from "@/components/popularCategory/Facilities";
import CategoryType from "@/components/popularCategory/CategoryType";
import CategoryList from "@/components/popularCategory/CategoryList";
import { useSelector } from "react-redux";
import { useAddPropertyMutation } from "@/app/feature/property/propertyApi";
import axios from "axios";
import getBaseUrl from "@/utils/getBaseUrl";

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

  // category
  const [guestCount, setGuestsCount] = useState(1);
  const [bedroomCount, setBedroomsCount] = useState(1);
  const [bedCount, setBedsCount] = useState(1);
  const [bathroomCount, setBathroomsCount] = useState(1);

  const [addProperty, { isLoading }] = useAddPropertyMutation();
  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const listtingForm = new FormData();

      const data = {
        userId: userId,
        category: category,
        type: type,
        streetAddress: formLocations.streetAddress,
        aptSuity: formLocations.aptSuite,
        city: formLocations.city,
        Province: formLocations.province,
        country: formLocations.country,
        guestCount: guestCount,
        bedroomCount: bedroomCount,
        bedCount: bedCount,
        bathroomCount: bathroomCount,
        amenities: amenities,
        title: formDescriptiond.title,
        descriptions: formDescriptiond.description,
        price: formDescriptiond.price,
      };

      photos.forEach((photo) => listtingForm.append("photoList", photo));

      const response = await addProperty(data).unwrap();
     
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Discription
  const handleDiscriptionChenge = (e) => {
    const { name, value } = e.target;
    setFormDescriptiond({
      ...formDescriptiond,
      [name]: value,
    });
  };

  const { user } = useSelector((state) => state.auth);
  const userId = user._id;

  // console.log(formDescriptiond);

  return (
    <div className="">
      <div className="h3 my-14 md:mt-20">Add Property</div>
      <form className="mx-2 md:mx-4" onSubmit={handlePost}>
        <h4>Describe Your Property</h4>
        {/* category */}
        <div className="shadow shadow-white">
          <CategoryList category={category} setCategory={setCategory} />
        </div>

        {/* container type & location */}
        <div className=" flex flex-col xl:flex-row gap-x-16">
          {/* type place */}
          <h4 className="h4 my-4">What is the type of your place?</h4>
          <div className=" flex flex-col  ">
            {/*  */}
            <CategoryType setType={setType} type={type} />
          </div>

          {/* place location */}
          <div className="flex-1 mb-4 mx-3 md:mx-1 ">
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
                  className="bg-white text-sm outline-none border-[1px] border-black mb-2 rounded h-10 w-80 p-2 "
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
                    className="bg-white text-sm outline-none border-[1px] border-black mb-2 rounded p-2 h-10"
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
                    className="bg-white text-sm outline-none border-[1px] border-black mb-2 rounded p-2 h-10"
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
                    className="bg-white text-sm outline-none border-[1px] border-black mb-2 rounded p-2 h-10"
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
                    className="bg-white text-sm outline-none border-[1px] border-black mb-2 rounded p-2  h-10"
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
              className="bg-white p-2  text-sm outline-none border-[1px] border-black mb-2 w-full   rounded"
            />
            <h5 className="h5">Descriptions:</h5>
            <textarea
              name="description"
              placeholder="Description"
              rows={10}
              required
              value={formDescriptiond.description}
              onChange={handleDiscriptionChenge}
              className="bg-white p-2  text-sm outline-none border-[1px] border-black mb-2 w-full  resize-none  rounded"
            />
            <h5 className="h5">Price:</h5>
            <input
              type="number"
              name="price"
              placeholder="100"
              required
              value={formDescriptiond.price}
              onChange={handleDiscriptionChenge}
              className="bg-white p-2  text-sm outline-none border-[1px] border-black mb-2   rounded"
            />
          </div>
        </div>
        <button type="submit" className="bg-green px-4 py-2 rounded-full">
          {isLoading ? <p>Loading....</p> : ' Create Property'} {" "}
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
