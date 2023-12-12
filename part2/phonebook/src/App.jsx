import { useState } from 'react'

const DisplayPerson = ({persons}) => {
  return persons.map(person => <li key={person.name}>{person.name}</li>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const numberObj = {
      name: newName
    }

    if (persons.filter(person => person.name === newName).length) {
      console.log(persons.filter(person => person.name === newName))
      alert(`${newName} is already in phonebook`)
      return setNewName(newName)
    }

    setPersons(persons.concat(numberObj))
    setNewName('')
  }
return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addNumber}>
      <div>
        name <input
          value={newName}
          onChange={(event)=>{setNewName(event.target.value)}}
        />
      </div>
      <div>
        number <input />
      </div>
      <div>
        <button type = "submit">add</button>  
      </div>  
    </form>  
    <h2>Numbers</h2>
    <ul>
      <DisplayPerson persons={persons} />
    </ul>
  </div>
)}

export default App