const Country = ({ country, onFavouriteToggle }) => {

  if (!country) {
    return null
  }

  const handleClick = () => {
    onFavouriteToggle(country.alpha3Code)
  }

  const favouriteBtnText = country.favourite ? 'Remove from favourites' : 'Add to favourites'

  return (
    <>
      <h3>Name: {country.name}</h3>
      <img src={country.flag} alt={`Flag of ${country.name}`}></img>
      <button onClick={handleClick}>{favouriteBtnText}</button>
    </>
  )
}

export default Country