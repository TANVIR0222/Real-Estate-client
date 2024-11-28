
const PropetyList = ({formDescriptiond, handleDiscriptionChenge}) => {
    return (
        <div>
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
    );
};

export default PropetyList;