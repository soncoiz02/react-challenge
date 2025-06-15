import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/scss/_header.scss";

const Header = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const hanldeClick = (type: string) => {
    navigate(`/?type=${type}&page=1`);
  };

  const isNowPlaying = searchParams.get("type") === "now_playing";
  const isTopRated = searchParams.get("type") === "top_rated";

  return (
    <header className="header">
      <div className="container">
        <h2 className="logo">
          MO.<span>VIES</span>
        </h2>
        <nav className="header-nav">
          <div className={`btn-nav ${isNowPlaying ? "active" : ""}`} onClick={() => hanldeClick("now_playing")}>
            Now Playing
          </div>
          <div className={`btn-nav ${isTopRated ? "active" : ""}`} onClick={() => hanldeClick("top_rated")}>
            Top Rated
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
