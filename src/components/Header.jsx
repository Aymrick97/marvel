import { Link } from "react-router-dom";
import logo from "../assets/Marvel.png";
const Header = ({ search, setSearch }) => {
  return (
    <div className="container2">
      <Link to="/personage">
        <img src={logo} alt="" />
      </Link>

      <input
        placeholder="Recherches tes Heros..."
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);

          // Voir useDebounce pour ne pas faire une requête à chaque caractère écrit
        }}
      />
      <div className="menu">
        <Link to={`/personage/`}>
          <button>Perssonages</button>
        </Link>
        <Link to={`/comics/`}>
          <button>Comics</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
