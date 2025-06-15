import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons/faTableCellsLarge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, type ChangeEvent } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

const FilterBar = ({ view, setView }: { view: string; setView: (view: string) => void }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const debouceSearchValue = useDebounce(searchValue, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    setSearchParams({ ...Object.fromEntries(searchParams), query: debouceSearchValue, page: "1" });
  }, [debouceSearchValue]);

  return (
    <div className="filter-bar">
      <input className="search-input" value={searchValue} onChange={handleSearch} placeholder="Search movie..." />
      <div className="segment-control">
        <div className="segment-item">
          <input id="list-view" type="radio" checked={view === "grid"} name="view" value={"grid"} onChange={() => setView("grid")} />
          <label htmlFor="list-view">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </label>
        </div>
        <div className="segment-item">
          <input id="grid-view" type="radio" checked={view === "list"} name="view" value={"list"} onChange={() => setView("list")} />
          <label htmlFor="grid-view">
            <FontAwesomeIcon icon={faListUl} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
