const CountrySelector = ({ countries, onCountrySelected }) => {

  const handleChange = event => {
    onCountrySelected(event.target.value)
  }

  return (
    <select defaultValue="" onChange={handleChange}>
      <option value="" disabled>Choose a country</option>
      {countries.map(country => {
        return (
          <option key={country.alpha3Code} value={country.alpha3Code}>{country.name}</option>
        )
      })}
    </select>
  )
}

export default CountrySelector