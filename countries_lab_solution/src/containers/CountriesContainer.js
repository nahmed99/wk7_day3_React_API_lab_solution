import { useState, useEffect} from 'react'
import CountrySelector from '../components/CountrySelector'
import Country from '../components/Country'
import FavouriteCountries from '../components/FavouriteCountries'

const CountriesContainer = () => {

  const [countries, setCountries] = useState([])
  const [selectedCountryAlpha3Code, setSelectedCountryAlpha3Code] = useState('')

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(countriesData => setCountries(countriesData))
  }

  const handleCountrySelected = alpha3Code => {
    setSelectedCountryAlpha3Code(alpha3Code)
  }

  const handleFavouriteToggle = (alpha3Code) => {
    const updatedCountries = countries.map((country) => {
      if (country.alpha3Code === alpha3Code){
        country.favourite = !country.favourite
      }
      return country
    })
    setCountries(updatedCountries)
  }

  const totalPopulation = countries.reduce((total, country) => {
    return total + country.population
  }, 0)

  const selectedCountry = countries.find(country => country.alpha3Code === selectedCountryAlpha3Code)

  return (
    <>
      <h2>Countries Container</h2>
      <p>Total population: {totalPopulation}</p>
      <CountrySelector countries={countries} onCountrySelected={handleCountrySelected} />
      <Country country={selectedCountry} onFavouriteToggle={handleFavouriteToggle} />
      <FavouriteCountries countries={countries} onCountrySelected={handleCountrySelected} />
    </>
  )
}

export default CountriesContainer
