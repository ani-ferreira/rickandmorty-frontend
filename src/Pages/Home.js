import Character from "../Components/Character";
import { useState, useEffect } from "react";
import NavigationBtn from "../Components/Navigation";
import Loader from "../Components/Layout/LoaderImg";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [searchedChar, setSearchedChar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
    setIsLoading(false);
  }, [currentPage]);

  const prevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const handleSearch = (e) => {
    setSearchedChar(e.target.value);
  };

  const filteredCharacter = characters.filter((ch) => {
    return ch.name.toLowerCase().includes(searchedChar.toLocaleLowerCase());
  });

  return (
    <div className="container">
      <div className="d-flex justify-content align-self-center">
        <NavigationBtn
          nextPage={nextPage}
          prevPage={prevPage}
          className="mx-auto align-self-center"
        />

        <div className="mx-auto align-self-center" style={{ width: "15rem" }}>
          <label>Buscar un personaje:</label>
          <input type="text" onChange={handleSearch} />
        </div>
      </div>
      <div className="container mt-5 ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row">
            {filteredCharacter.length === 0 && <h4>No hay resultados.</h4>}
            {filteredCharacter.map((char) => (
              <Character
                className="col-xs-4"
                key={char.id}
                name={char.name}
                image={char.image}
                id={char.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
