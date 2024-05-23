import React from "react";
import Navbar from "../components/Navbar";
import IconNav from "../components/IconNav";
import Popular from "../components/Popular";

function Home() {
  return (
    <div>
      {/* Top Navigation */}
      <Navbar />

      {/* Icon Navbar */}
      <IconNav />

      {/* Populer Area */}
      <Popular />
    </div>
  );
}

export default Home;
