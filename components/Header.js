import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";






function Header({placeholder}) {
const [searchInput,setSearchInput] = useState("");
const[startDate,setStartDate]=useState(new Date());
const[endDate,setendDate]=useState(new Date());
const[noOfGuests,setNoOfGuests]=useState("1");
const router = useRouter();



const handleSelect =(ranges)=>{
  setStartDate(ranges.selection.startDate);
  setendDate(ranges.selection.endDate);

}
const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: 'selection',
}


const resetInput=()=>{
  setSearchInput("");

}
const search=()=>{
  router.push({
    pathname:"/search",
    query:{
      location:searchInput,
      startDate:startDate.toISOString(),
      endDate:endDate.toISOString(),
      noOfGuests,
    },
  });
  
}



  return (
    <header className="sticky top-0 z-50 bg-white  shadow-md p-5 md:px-10 md:grid md:grid-cols-3">
      {/* left */}
      <div  onClick={() => router.push('/')} className="relative md:flex hidden items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle Search*/}
      <div className="flex items-center rounded-full shawdow-sm  border-2  lg:p-3 p-3 justify-between flex-grow md:justify-center lg:justify-between">
        <input
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder ||"Start your Search"}
          className="outline-none   bg-transparent  text-sm text-gray-600 placeholder-gray-400 w-full"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:hidden block lg:block flex-shrink-0 " />
      </div>

      {/* right */}
      <div className="md:flex hidden space-x-4 items-center justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex rounded-full border-2 items-center space-x-2 p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
      <div className="flex flex-col col-span-3 mx-auto">
        <DateRangePicker
         ranges={[selectionRange]}
         minDate ={new Date()}
         rangeColors={["#FD5B61"]}
         onChange={handleSelect}
        />
        <div className="flex items-center border-b mb-4">
          <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
          <UsersIcon className="h-5"/>
          <input
          value={noOfGuests}
          onChange={(e)=>setNoOfGuests(e.target.value)}
          min={1}
          type="number" className="w-12 pl-2 text-lg outline-none text-red-400"/>
        </div>
        <div className="flex">
          <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
          <button  onClick={search} className="flex-grow text-red-400">Search</button>
        </div>
        </div>
        )}
    </header>
  );
}

export default Header;
