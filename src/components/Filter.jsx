import { useCallback, useRef, useState } from "react";
import searchIcon from "../assets/search-icon.png"

function Filter(props){
  console.count("filter");
  const {setSearchParams, query, region} = props;
  const [value, setValue]= useState(query);
  const timeoutId = useRef()
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
  
  function updateQuery(){
    setSearchParams((params) =>{
      if (value.length){
        params.set('country', value);
      }else {
        params.delete("country")
      }
      return params;
    })
  }
  const handleUserInput = useCallback(function(e){
    let query = e.target.value;
    query = query.replace(/[.*+?^${}()|[\]\\]/g, '');
    setValue(query)
    if (query.length == 0){
      updateQuery()
    }
  }, [])
  return (
      <div className="filter">
        <div className="search-bar">
          <button className="search-btn" onClick={updateQuery}>
            <img src={searchIcon} className="search-icon" alt="search icon" />
          </button>
          <input type="text" value={value} placeholder='Search for a country...' onChange={handleUserInput} />
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