import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [country, setCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [countriesArray, setCountriesArray] = useState([])
  const [countryDetails, setCountryDetails] = useState([])

  const DisplayCountries = ({country, countriesArray}) => {
    let countriesToShow = []

    if (country !== ''){
      countriesToShow = countriesArray.filter(element => {
        if (element.toLowerCase().startsWith(country)) {
          return element
        }
      })
    }

    if (countriesToShow.length >= 10) {
      return <>too long</>
    }
      return (
      <>
        {countriesToShow.map(element => <li key={element}>{element}</li>)}
      </>
      )
  }
  useEffect(() => {
      if(selectedCountry){
        console.log('effect run, fetching data for', selectedCountry);
        axios
          .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${selectedCountry}`)
          .then(response => {
            setCountryDetails(response.data)
          })
          .catch(error => console.log(error.response.status))
      }
    
  }, [country])


  //set up of countries array
  useEffect(() => {
    console.log('effect run, fetching array of countries');
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => response.data)
      .then(responseArray => setCountriesArray(responseArray.map(country => country.name.common)))
      .catch(error => console.log(error.response))
  }, [])
  
  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountry(country)
  }

  return (
    <>
      <form onSubmit={onSearch}>
        country <input value={country} onChange={handleChange} />
      </form>

      <div>
        <ul>
          <DisplayCountries country={country} countriesArray={countriesArray} />
        </ul>    
      </div>
    </>
  )
}

export default App
