import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer.tsx";

import Home from "./pages/Home/Home.tsx";
import Movies from "./pages/Movies/Movies.tsx";
import TVShows from "./pages/TVShows/TVShows.tsx";
import Streams from "./pages/Streams/Streams.tsx";
import Games from "./pages/Games/Games.tsx";
import Registration from "./pages/Registration/Registration.tsx";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/games" element={<Games />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
