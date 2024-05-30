import React from "react";
import Navbar from "../components/Navbar";
import IconNav from "../components/IconNav";
import Popular from "../components/Popular";
import Lelang from "../components/Lelang";

function Home() {
  return (
    <div className="mb-4">
      {/* Top Navigation */}
      <Navbar />

      {/* Icon Navbar */}
      <IconNav />

      {/* Populer Area */}
      <Popular />

      {/*  */}
      <Lelang />
    </div>
  );
}

export default Home;
