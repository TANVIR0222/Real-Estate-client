import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center">
      <Input  type="text" placeholder="Search..." />
      <CiSearch className="-ml-5" />
    </div>
  );
};

export default Search;
