import React from "react";

function Footer() {
  return (
    <div className="mt-4 grid lg:grid-cols-3 grid-cols-1  justify-between py-4 px-8 font-Roboto bg-blue-800 text-white gap-8">
      <div>
        <h2 className="text-xl font-semibold">bjb-Lelang Kanwil 3</h2>
        <p className="mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit.
        </p>
      </div>

      <div className="">
        <h2 className="text-xl font-semibold">bank bjb Kanwil III</h2>
        <h3 className="mt-4 text-sm">Jl. Sultan Agung No. 3 - Sumber</h3>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Link Terkait</h2>
        <ul className="grid grid-cols-1 gap-2 mt-4 font-semibold w-full">
          <li>Beranda</li>
          <li>Info Aset</li>
          <li>Info Lelang</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
