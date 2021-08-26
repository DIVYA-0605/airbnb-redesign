import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-5 md:px-10 grid grid-cols-3 ">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle Search*/}
      <div className="flex items-center rounded-full md:shawdow-sm   md:border-2  py-2">
        <input
          type="text"
          placeholder="Start your Search"
          className="outline-none  pl-5 bg-transparent flex-grow text-small text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex rounded-full border-2 items-center space-x-2 p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
