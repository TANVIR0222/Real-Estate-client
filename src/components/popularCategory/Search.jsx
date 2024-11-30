import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Search = () => {
  
  return (
    <Link to={'/search-view'}>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Search..."
          className="bg-slate-50 text-green"
        />
        <CiSearch className="-ml-5 text-black" />
      </div>
    </Link>
  );
};

export default Search;
