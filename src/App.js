import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import CharacterDetails from "./Pages/CharacterDetails";
import NavBar from "./Components/Layout/NavBar";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="misfavoritos" element={<Favourites />} />
        <Route path="personaje/:id" element={<CharacterDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
