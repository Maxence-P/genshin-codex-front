import '../../styles/Searchbar.css';

import { useEffect } from "react";

const Searchbar = ({search, handleSearch}) => {

  useEffect(() => {
  }, [search]);
 
  return (
    <div className="search-bar">
      <input type="text" value={search} name="search" autoComplete="off" required onChange={(event) => handleSearch(event)} />
      <label htmlFor="search" className="label-search">
        <span className="content-search">Rechercher par nom</span>
      </label>
    </div>
  )
}

export default Searchbar;