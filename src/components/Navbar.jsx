import { Menu, Search } from "@mui/icons-material";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:justify-start py-4 px-8 font-Roboto bg-blue-800 text-white gap-4">
      {/* Logo */}
      <div className="">
        <h1 className="font-semibold text-2xl">e-Lelang</h1>
      </div>

      <div className="hidden lg:flex lg:flex-1 items-center justify-between">
        {/* Search Bar */}
        <div className="mx-5 w-1/3 relative items-center flex">
          <div className="absolute text-gray-400 left-0 w-10 inline-flex justify-center">
            <Search />
          </div>
          <input
            type="text"
            className="w-full rounded-md py-2 text-sm pl-10 px-4 text-gray-500"
            placeholder="Cari aset terbaik untuk Anda..."
          />
        </div>

        {/* Menu */}
        <div className="text-sm">
          <ul className="flex gap-6 font-semibold w-full text-right justify-end">
            <li>Beranda</li>
            <li>Info Aset</li>
            <li>Info Lelang</li>
          </ul>
        </div>

        {/* Login Button */}
        <div>
          <button className="border border-blue-200 py-2 px-4 rounded-md text-white text-sm shadow-sm">
            Login/Daftar
          </button>
        </div>
      </div>

      {/* Button */}
      <div className="lg:hidden flex">
        <button>
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
