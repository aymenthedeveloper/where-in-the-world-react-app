import React, { useEffect, useRef, useState } from 'react'
import data from '../assets/data.json'
import CountryDetails from './CountryDetails'
import Countries from './Countries'


export default function Main() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [targetCountry, setTargetCountry] = useState(getDefaultCountry())
  const lastCountry = useRef(targetCountry)
  const props = {query, setQuery, setRegion, region, setTargetCountry, lastCountry}

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

  return (
    <main>
      {Object.keys(targetCountry).length != 0? (
        < CountryDetails country={targetCountry} setTargetCountry={setTargetCountry} key={0} />
      ): <Countries {...props}/>}
    </main>
  )
}
