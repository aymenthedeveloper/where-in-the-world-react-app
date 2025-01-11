function CountryCard({country, setTargetCountry, lastCountry}) {
  const handleClick = ()=> {
    setTargetCountry(country)
    lastCountry.current = country;
  }
  return (
    <div className='country' >
      <div className="flag">
        <img src={country.flags.png} alt="" loading='lazy' />
      </div>
      <div className="info">
        <h2 className="name"><a href={`#${country.name}`} onClick={handleClick}>{country.name}</a></h2>
        <p className="population">Population: {country.population.toLocaleString()}</p>
        <p className="region">Region: {country.region}</p>
        <p className="capital">Capital: {country.capital}</p>
      </div>
    </div>
  )
}

export default CountryCard;