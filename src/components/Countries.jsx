import data from '../assets/data.json'
import Filter from "./Filter"
import CountryCard from './CountryCard';

function Countries(props) {
  const {region, query, setTargetCountry, setRegion, setQuery, lastCountry} = props;
  const filteredData = data
  .filter(c => (region? c.region == region: true) && (query? new RegExp(`^${query}`, 'i').test(c.name): true))
  .map((country, i) => <CountryCard country={country} key={i} setTargetCountry={setTargetCountry} lastCountry={lastCountry}/>)

  return (
    <>
    <Filter query={query} setQuery={setQuery} setRegion={setRegion} />
    <div className="countries">
      {filteredData.length > 0? filteredData:`No results for "${query}"`}
    </div>
    </>
  )
}

export default Countries;