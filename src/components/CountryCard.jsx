import {Link} from "react-router"

function CountryCard({country, setTargetCountry, lastCountry}) {
  
  return (
    <div className='country' >
      <div className="flag">
        <img src={country.flags.png} alt="" loading='lazy' />
      </div>
      <div className="info">
        <h2 className="name"><Link to={country.name.replace(/ /g, "_")}>{country.name}</Link></h2>
        <p className="population">Population: {country.population.toLocaleString()}</p>
        <p className="region">Region: {country.region}</p>
        <p className="capital">Capital: {country.capital}</p>
      </div>
    </div>
  )
}

export default CountryCard;