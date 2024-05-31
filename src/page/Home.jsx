import React from "react";
import Navbar from "../components/Navbar";
import IconNav from "../components/IconNav";
import Popular from "../components/Popular";
import Lelang from "../components/Lelang";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Top Navigation */}
      <Navbar />

      {/* Icon Navbar */}
      <IconNav />

      {/* Populer Area */}
      <Popular />

      {/*  */}
      <Lelang />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
