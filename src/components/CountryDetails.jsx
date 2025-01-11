import leftArrow from "../assets/leftArrow.png"
import data from '../assets/data.json'

function CountryDetails({country, setTargetCountry}){
  const codes = {"none": "There is no Border Countries"}
  data.map(c => {
    codes[c.alpha3Code] = c.name.replace(/\([^\)]*\)/, '').trim();
  })
  function handleClick() {
    setTargetCountry({})
    history.back()
  }
  return (
    <div className="country-details">
      <button onClick={handleClick} className='back-btn'>
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
            Border Countries: <span className='borders'>{(country.borders || ["none"]).map((b, id) => <span className='border-country' key={id}>{codes[b]}</span>)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails