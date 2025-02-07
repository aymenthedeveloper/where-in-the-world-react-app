import { useCallback } from "react";
import searchIcon from "../assets/search-icon.png"

function Filter(props){
  const {setSearchParams, query, region} = props;
  const regions = [ "Africa", "America", "Asia", "Europe", "Oceania"];

  const handleRegionChange = useCallback((e)=>{
    setSearchParams((params) =>{
      const value = e.target.value;
      if (value.length){
        params.set('region', value);
      } else{  
        params.delete("region")
      }
      return params
    })
  }, [])
  
  const handleUserInput = useCallback(function(e){
    setSearchParams((params) =>{
      let query = e.target.value;
      query = query.replace(/[.*+?^${}()|[\]\\]/g, '');
      if (query.length){
        params.set('country', query);
      }else {
        params.delete("country")
      }
      return params;
    })
  }, [])
  return (
      <div className="filter">
        <div className="search-bar">
          <div className="img-container">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input type="text" value={query} placeholder='Search for a country...' onChange={handleUserInput} />
        </div>
        <select name="Filter" id="Filter" className='region-filter' defaultValue={region} onChange={handleRegionChange}>
          <option value="" disabled hidden>Filter by Region</option>
          <option value="">All</option>
          {regions.map((reg, i) => <option key={i} value={reg}>{reg}</option>)}
        </select>
      </div>
  )
}

export default Filter;