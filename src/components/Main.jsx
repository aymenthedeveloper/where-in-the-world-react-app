import React, { useEffect, useRef, useState } from 'react'
import CountryDetails from './CountryDetails'
import Countries from './Countries'
import CountryCard from './CountryCard';
import Filter from "./Filter"


export default function Main({data}) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [targetCountry, setTargetCountry] = useState(getDefaultCountry())
  const lastCountry = useRef(targetCountry)

  function handlePopstate(e){
    let country = (window.location.href.match(/#.+$/) || [])[0];
    if (country){
      setTargetCountry(lastCountry.current)  
    } else {
      setTargetCountry({})
    }
  }
  function getDefaultCountry(){
    let countryName = (window.location.href.match(/#.+$/) || [])[0];
    if (countryName){
      countryName = decodeURIComponent(countryName.slice(1))
      for (const country of data){
        if (country.name == countryName){ 
          return country
        }
      }
    }
    return {}
  }
  
  useEffect(()=>{
    window.addEventListener('popstate', handlePopstate)
    return ()=>{
      window.removeEventListener('popstate', handlePopstate)
    }
  }, [])

  if (Object.keys(targetCountry).length != 0){
    return (
      <main>
        < CountryDetails country={targetCountry} setTargetCountry={setTargetCountry} data={data} />
      </main>
    )
  }

  const filteredData = data.filter(c => (region? c.region == region: true) && (query? new RegExp(`^${query}`, 'i').test(c.name): true))
  .map(country => <CountryCard country={country} key={country.id} setTargetCountry={setTargetCountry} lastCountry={lastCountry}/>)
  return(
    <main>
      <Filter query={query} setQuery={setQuery} setRegion={setRegion} />
      <Countries>
        {filteredData.length > 0? filteredData:`No results for "${query}"`}
      </Countries>
    </main>
  )

}
