import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const Perso = ({ elem }) => {
  const [fav, setFav] = useState(false);
  //console.log(elem._id);
  return (
    <div key={elem._id}>
      <section className="card">
        <Link to={`/persoComics/${elem._id}`}>
          <img
            src={elem.thumbnail.path + "." + elem.thumbnail.extension}
            alt={elem.name}
          />
        </Link>
        <div className="desc">
          {elem.name && <h3>{elem.name}</h3>}
          {elem.description && <p>{elem.description}</p>}
          <button
            onClick={() => {
              if (fav === false) {
                setFav(true);
                Cookies.set("marvel", fav);

                alert("ajouter");
                Cookies.set("marvel", fav, { expires: 14 });
              } else {
                setFav(false);
                Cookies.remove("marvel");
                alert("supprimer");
              }
            }}
          >
            ⭐️
          </button>
        </div>
      </section>
    </div>
  );
};

export default Perso;
