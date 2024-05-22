import {
  Cottage,
  Grass,
  Handshake,
  LocalFireDepartment,
  MonetizationOn,
} from "@mui/icons-material";
import React from "react";

function IconNav() {
  return (
    <div className="mx-auto pt-8 font-Roboto grid grid-cols-5 w-3/5">
      <a className="items-center flex flex-col">
        <Cottage fontSize="large" className="text-blue-800" />
        <span className="text-xs">Rumah</span>
      </a>
      <a className="items-center flex flex-col">
        <Grass fontSize="large" className=" text-amber-700" />
        <span className="text-xs">Tanah</span>
      </a>
      <a className="items-center flex flex-col">
        <LocalFireDepartment fontSize="large" className="text-red-600" />
        <span className="text-xs">Hot Item</span>
      </a>
      <a className="items-center flex flex-col">
        <Handshake className="text-gray-400" fontSize="large" />
        <span className="text-xs">Sukarela</span>
      </a>
      <a className="items-center flex flex-col">
        <MonetizationOn fontSize="large" className="text-orange-600" />
        <span className="text-xs">Lelang</span>
      </a>
    </div>
  );
}

export default IconNav;
