import React from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import RowPost from "./components/rowpost/RowPost";
import { originals, action, comedy, horror, trending, romance, documentary } from "./url";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix originals" />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
    </div>
  );
}

export default App;
