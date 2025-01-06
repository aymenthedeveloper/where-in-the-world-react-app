import React, { useEffect, useState } from 'react'
import searchIcon from "../assets/search-icon.png"
import leftArrow from "../assets/leftArrow.png"
import data from '../assets/data.json'
import countryCodes from '../assets/countryCodes.json'

export default function Main() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [targetCountry, setTargetCountry] = useState({})
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const props = {query, setQuery, setRegion, region, regions, setTargetCountry}
  return (
    <main>
      {Object.keys(targetCountry).length != 0? < CountryDetails country={targetCountry} setTargetCountry={setTargetCountry} />: <Countries {...props}/>}
    </main>
  )
}

function CountryDetails({country, setTargetCountry}){
  const codes = {}
  data.map(c => {
    codes[c.alpha3Code] = c.name.replace(/\([^\)]*\)/, '').trim();
  })
  return (
    <div className="country-details">
      <button onClick={()=> setTargetCountry({})} className='back-btn'>
        <img src={leftArrow} alt="" /> Back
      </button>
      <div className="data-container">
        <div className="flag">
          <img src={country.flags.png} alt="" />
        </div>
        <div className="data">
          <div className="row-1">
            <h2 className="name">
              {country.name}
            </h2>
          </div>
          <div className="row-2">
            <div className='col'>
              <p>Native Name: {country.nativeName}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
            </div>
            <div className='col'>
              <p>Top Level domain: {country.topLevelDomain}</p>
              <p>Currencies: {country.currencies.map(c => c.code).join(', ')}</p>
              <p>Languages: {country.languages.map(lang => lang.nativeName).join(', ')}</p>
            </div>
          </div>
          <div className=" row-3">
            Border Countries: <span className='borders'>{country.borders.map(b => <span className='border-country'>{codes[b]}</span>)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Filter(props){
  const {query, setQuery, regions, setRegion} = props;
  return (
      <div className="filter">
        <div className="search-bar">
          <div className="img-container">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input type="text" value={query} placeholder='Search for a country...' onChange={(e)=> setQuery(e.target.value)} />
        </div>
        <select name="Filter" id="Filter" className='region-filter' defaultValue={""} onChange={(e)=>setRegion(e.target.value)}>
          <option value="" disabled hidden>Filter by Region</option>
          {regions.map((reg, i) => <option key={i} value={reg}>{reg}</option>)}
        </select>
      </div>
  )
}

function Countries(props) {
  const {region, query, setTargetCountry, setRegion, regions, setQuery} = props;
  return (
    <>
    <Filter query={query} setQuery={setQuery} regions={regions} setRegion={setRegion} />
    <div className="countries">
      {data
      .filter(c => (region? c.region == region: true) && (query? new RegExp(`^${query}`, 'i').test(c.name): true))
      .map((country, i) => <CountryCard country={country} key={i} setTargetCountry={setTargetCountry}/>)
      }
    </div>
    </>
  )
}

function CountryCard({country, setTargetCountry}) {
  return (
    <div className='country' onClick={()=> setTargetCountry(country)}>
      <div className="flag">
        <img src={country.flags.png} alt="" loading='lazy' />
      </div>
      <div className="info">
        <h2 className="name">{country.name}</h2>
        <p className="population">Population: {country.population.toLocaleString()}</p>
        <p className="region">Region: {country.region}</p>
        <p className="capital">Capital: {country.capital}</p>
      </div>
    </div>
  )
}

