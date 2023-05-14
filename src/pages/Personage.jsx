import { useEffect, useState } from "react";
import axios from "axios";
import Perso from "../components/Perso";

const Personage = ({ search, fav, setFav }) => {
  const [data, setData] = useState({});
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/personage?name=${search}`
        );
        //console.log(response.data);
        setData(response.data);
        setChargement(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);
  return chargement ? (
    <p>Chargement en cour...</p>
  ) : (
    <div>
      <h1>Découvrez vos heros</h1>
      <div className="container">
        {data.results.map((elem, _id) => {
          return <Perso elem={elem} key={elem._id} fav={fav} setFav={setFav} />;
        })}
      </div>
    </div>
  );
};
export default Personage;
