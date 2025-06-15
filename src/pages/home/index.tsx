import FilterBar from "./FilterBar";
import ListMovie from "./ListMovie";
import "../../styles/scss/_home.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState("grid");

  useEffect(() => {
    if (!searchParams.get("type")) {
      setSearchParams({ type: "now_playing", page: "1" });
    }
  }, []);

  return (
    <section className="home">
      <div className="container">
        <FilterBar view={view} setView={setView} />
        <ListMovie view={view} />
      </div>
    </section>
  );
};

export default Home;
