import React, {useMemo} from 'react'
import CountryCard from './CountryCard';
import Filter from "./Filter"
import data from '../assets/data.json'
import { useSearchParams } from 'react-router';


export default function Main() {
  console.count("main");
  const [searchParams, setSearchParams] = useSearchParams()
  const region = searchParams.get('region') || '';
  const query = searchParams.get('country') || '';  

  const filteredCountriesByRegion = useMemo(()=>{
    return data.filter(c => (region? c.region == region: true))
  }, [region])
  
  const filteredCountriesByQuery = filteredCountriesByRegion.filter(c => query? new RegExp(`^${query}`, 'i').test(c.name): true);

  return(
    <>
      <Filter query={query} region={region} setSearchParams={setSearchParams}/>
      <div className="countries">
        {filteredCountriesByQuery.length > 0? (
          filteredCountriesByQuery.map(c => <CountryCard country={c} key={c.alpha3Code} />)
        ): `No results for "${query}"`}
      </div>
    </>
  )

}
