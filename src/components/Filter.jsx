import searchIcon from "../assets/search-icon.png"

function Filter(props){
  const {query, setQuery, setRegion} = props;
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  function handleUserInput(e){
    let input = e.target.value;
    input = input.replace(/[.*+?^${}()|[\]\\]/g, '');
    setQuery(input)
  }
  return (
      <div className="filter">
        <div className="search-bar">
          <div className="img-container">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input type="text" value={query} placeholder='Search for a country...' onChange={handleUserInput} />
        </div>
        <select name="Filter" id="Filter" className='region-filter' defaultValue={""} onChange={(e)=>setRegion(e.target.value)}>
          <option value="" disabled hidden>Filter by Region</option>
          {regions.map((reg, i) => <option key={i} value={reg}>{reg}</option>)}
        </select>
      </div>
  )
}

export default Filter;