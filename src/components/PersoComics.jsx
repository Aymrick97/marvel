import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PersoComics = () => {
  const { Id } = useParams();
  const [data, setData] = useState({});
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/characterId/?Id=${Id}`
        );
        //console.log(response);
        setData(response.data);
        setChargement(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [Id]);

  return chargement ? (
    <p>Chargement en cours...</p>
  ) : (
    <div>
      <h1>Découvrez les comics de votre hero</h1>
      <div className="container">
        {data.comics.map((elem, index) => {
          //console.log(elem);
          return (
            <div className="card" key={index}>
              <img
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt={elem.name}
              />
              {elem.name || elem.description ? (
                <div className="desc">
                  {elem.name && <h3>{elem.name}</h3>}
                  {elem.description && <p>{elem.description}</p>}
                </div>
              ) : (
                <div className="desc">
                  <p>Inconus</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersoComics;
