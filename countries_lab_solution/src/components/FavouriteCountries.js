const FavouriteCountries = ({ countries, onCountrySelected }) => {

  const favouriteCountries = countries.filter(country => country.favourite)

  return (
    <>
      <h3>Favourite Countries:</h3>
      <ul>
        {favouriteCountries.map(country => {
          return (
            <li key={country.alpha3Code}>
              <button onClick={() => onCountrySelected(country.alpha3Code)}>{country.name}</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FavouriteCountries