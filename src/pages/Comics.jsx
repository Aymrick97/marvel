import { useEffect, useState } from "react";
import axios from "axios";

const Comics = ({ search }) => {
  const [data, setData] = useState({});
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?title=${search}`
        );
        setData(response.data);
        setChargement(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);
  return chargement ? (
    <p>Chargement en cours...</p>
  ) : (
    <div>
      <h1>Découvrez tous vos comics</h1>
      <div className="container">
        {data.results.map((elem, _id) => {
          return (
            <div key={_id}>
              <section className="card">
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt={elem.title}
                />

                <div className="desc">
                  {elem.title && <h3>{elem.title}</h3>}
                  {elem.description && <p>{elem.description}</p>}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
