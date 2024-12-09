import { useSearchCategoryPropertyQuery } from "@/app/feature/propertyApi/propertyApi";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchView = () => {
  const [search, setSearch] = useState();
  const { data } = useSearchCategoryPropertyQuery(search);
  return (
    <div className="my-20">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Search Page</h1>

        <div className="flex w-full max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-8 w-full  p-4 rounded">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Results:
          </h2>
         <div className=" mx-auto flex items-center justify-center">
         {data?.length > 0 ? (
            <div className="list-disc pl-5 space-y-2  ">
              {data?.map((item, index) => (
                <div
                  key={item._id}
                  className=" gap-4 ring-1 ring-slate-900/5 w-96 md:w-[600px] place-items-start my-5 bg-white cursor-pointer p-4 rounded-[2.5rem] relative mx-4 text-left mt-6"
                >
                  <Link to={`/property/${item._id}`}>
                    <div>
                      <img src={item?.listingPhotoPath[0]} alt="" />
                    </div>
                    {/*  */}
                    <div className="text-left max-sm:p-2 md:w-1/2 w-full">
                      <h4 className="h4">{item.title}</h4>
                      <div className="bold-16 pb-2">{item.category}</div>
                      <h5 className="flex items-start justify-start text-start  capitalize medium-15">
                        <CiLocationOn className="text-2xl text-start" /> {item.city},{" "}
                        {item.Province}, {item.country}
                      </h5>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <span className="text-green  bold-22">
                            ${item.price}
                          </span>
                          <span className="medium-14">/ nigth</span>
                        </div>
                        <div className="medium-15 capitalize p-1">
                          {item.type}
                        </div>
                      </div>
                      <p className=" line-clamp-4"> {item.descriptions}</p>

                      {/*  */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No results found</p>
          )}
         </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
