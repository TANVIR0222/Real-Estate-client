import { FaCloudUploadAlt, FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Facilities from "@/components/popularCategory/Facilities";
import CategoryType from "@/components/popularCategory/CategoryType";
import CategoryList from "@/components/popularCategory/CategoryList";
import { useSelector } from "react-redux";
import { useAddPropertyMutation } from "@/app/feature/propertyApi/propertyApi";
import { useImageUploadeMutation } from "@/app/feature/imageUploade/imageApi";
import { MdDelete } from "react-icons/md";
import PropetyList from "@/components/popularCategory/PropetyList";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const CreateListing = () => {
  const [category, setCategory] = useState("All");
  const [amenities, setAmenities] = useState([]);
  const [type, setType] = useState("");
  const [error, setError] = useState("");
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

  const [imageUploade, { isLoading: imageLoading }] = useImageUploadeMutation();

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("avatar", file);
    try {
      const { data } = await imageUploade(formData).unwrap();
      setPhotos((prevPhotos) => [...prevPhotos, data]);
    } catch (error) {
      console.error(error);
    }
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

  // Discription
  const handleDiscriptionChenge = (e) => {
    const { name, value } = e.target;
    setFormDescriptiond({
      ...formDescriptiond,
      [name]: value,
    });
  };

  const { user } = useSelector((state) => state.auth);
  const userId = user?.id;

  const handleDeleteImage = (index) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      updatedPhotos.splice(index, 1);
      return updatedPhotos;
    });
  };

  const [addProperty, { isLoading }] = useAddPropertyMutation();
  const navigate = useNavigate();
  const handlePost = async (e) => {
    e.preventDefault();

    try {
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
        listingPhotoPath: photos,
      };

      const response = await addProperty(data).unwrap();
      if (response.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormDescriptiond({
          title: "",
          description: "",
          price: "",
        });
        setGuestsCount(1);
        setBedroomsCount(1);
        setBedsCount(1);
        setBathroomsCount(1);
        setformLocations({
          streetAddress: "",
          aptSuite: "",
          city: "",
          province: "",
          country: "",
        });
        setCategory("");
        setAmenities([]);
        setPhotos([]);
        setType("");
      }
      navigate("/");
    } catch (error) {
      setError(error.data.message);
    }
  };

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Add Property </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          {/* image  */}
          <div>
            <h5 className="h5">Image</h5>
            <div>
              <label
                htmlFor="productImage"
                className="bg-blue-50 h-24 border rounded flex justify-center items-center cursor-pointer"
              >
                <div className="text-center flex justify-center items-center flex-col">
                  {imageLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <FaCloudUploadAlt size={35} />
                      <p>Upload Image</p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  id="productImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </label>
              {/**display uploded image*/}
              <div className="flex flex-wrap gap-4">
                {photos?.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className="h-20 mt-1 w-20 min-w-20 bg-blue-50 border relative group"
                    >
                      <img
                        src={img}
                        alt={img}
                        className="w-full h-full object-scale-down cursor-pointer"
                      />
                      <div
                        onClick={() => handleDeleteImage(index)}
                        className="absolute bottom-0 right-0 p-1 text-red-500 rounded  hidden group-hover:block cursor-pointer"
                      >
                        <MdDelete size={16} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h4 className="h4 my-5">
            How would your characterize the charm and excitment of this
            property?
          </h4>
          {/*  */}
          <PropetyList
            formDescriptiond={formDescriptiond}
            handleDiscriptionChenge={handleDiscriptionChenge}
          />
        </div>
        <p className="text-red-400 italic h5">{error}</p>
        <button type="submit" className="bg-green px-4 py-2 rounded-full">
          {isLoading ? <p>Loading....</p> : " Create Property"}{" "}
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
