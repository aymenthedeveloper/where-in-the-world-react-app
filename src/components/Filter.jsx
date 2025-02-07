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
  
  function updateQuery(query){
    setSearchParams((params) =>{
      if (query.length){
        params.set('country', query);
      }else {
        params.delete("country")
      }
      return params;
    })
  }
  const handleUserInput = useCallback(function(e){
    clearTimeout(timeoutId.current)
    let query = e.target.value;
    query = query.replace(/[.*+?^${}()|[\]\\]/g, '');
    setValue(query)
    timeoutId.current = setTimeout(()=> updateQuery(query), 250) // only update params if user stops typing
  }, [])
  return (
      <div className="filter">
        <div className="search-bar">
          <div className="img-container">
            <img src={searchIcon} alt="search icon" />
          </div>
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