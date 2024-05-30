import React from "react";
import { Share } from "@mui/icons-material";

const itemPopular = [
  {
    id: 1,
    title: "Rumah di Kuningan",
    description: "Description 1",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kuningan, Jawa Barat",
    price: 100,
    priceDiscount: 750,
    feature: {
      LT: "132m2",
      LB: "72m2",
      KT: "2",
    },
  },
  {
    id: 2,
    title: "Rumah di Cempaka Arum",
    description: "Description 1",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kab. Cirebon, Jawa Barat",
    price: 300,
    priceDiscount: 295,
    feature: {
      LT: "180m2",
      LB: "172m2",
      KT: "6",
    },
  },
  {
    id: 2,
    title: "Rumah di Bojong Gede",
    description: "Description 1",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kab. Bandung Barat, Jawa Barat",
    price: 300,
    priceDiscount: 275,
    feature: {
      LT: "80m2",
      LB: "42m2",
      KT: "6",
    },
  },
  {
    id: 1,
    title: "Rumah di Bojonggede",
    description: "Description 1",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kuningan, Jawa Barat",
    price: 100,
    priceDiscount: 750,
    feature: {
      LT: "132m2",
      LB: "72m2",
      KT: "2",
    },
  },
];

function Popular() {
  return (
    <div className="mx-auto font-Roboto mt-10">
      {/* Top */}
      <div className="flex items-center justify-between lg:px-12 px-8 ">
        <h3 className="font-semibold text-xl">Aset Populer</h3>
        <div>
          <a className="text-blue-800 text-sm font-semibold">
            Selengkapnya &raquo;
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="w-full overflow-hidden overflow-x-auto lg:px-12 pl-8 ">
        <div className="mt-4 lg:grid lg:grid-cols-2 gap-4 flex w-[1024px] lg:w-full">
          {itemPopular.map((_, index) => (
            <div>
              <div className="flex flex-col lg:flex-row items-start gap-4 border border-gray-200 p-2 rounded-md">
                <div className="flex">
                  <a className="relative">
                    <div className="absolute bg-slate-50 rounded-full p-2 m-2 text-gray-500">
                      <Share />
                    </div>
                    <img
                      className="rounded-md lg:w-[300px] lg:h-[150px] bg-cover"
                      alt={_.title}
                      src={_.image}
                    ></img>
                  </a>
                </div>
                <a className="space-y-1">
                  <h4 className="lg:text-md text-lg font-bold mt-4 lg:mt-0">
                    {_.title}
                  </h4>
                  <p className="text-gray-400 text-xs uppercase">
                    {_.location}
                  </p>
                  <div>
                    <ul className="flex text-xs text-gray-400 gap-3">
                      <li>LT. {_.feature.LT}</li>
                      <li>LB. {_.feature.LB}</li>
                      <li>{_.feature.KT} KT</li>
                    </ul>
                  </div>
                  <div className="text-sm line-through text-gray-500">
                    Rp. {_.price} Juta
                  </div>
                  <div className="flex items-center gap-2 text-lg text-blue-800 font-semibold">
                    Rp. {_.priceDiscount} Juta
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
