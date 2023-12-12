import { useState } from 'react'

const DisplayPerson = ({persons}) => {
  return persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '12341301691'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const numberObj = {
      name: newName,
      number: newNumber
    }

    if (persons.filter(person => person.name === newName).length) {
      console.log(persons.filter(person => person.name === newName))
      alert(`${newName} is already in phonebook`)
      return setNewName(newName)
    }

    setPersons(persons.concat(numberObj))
    setNewName('')
    setNewNumber('')
  }

return (
  <div>
    <h2>Phonebook</h2>
      <input 
        value={newFilter}
        onChange={(event) => setFilter(event.target.value)}
      />
    <h2>Add new</h2>
    <form onSubmit={addNumber}>
      <div>
        name: <input
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div>
        number: <input type='tel'
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}  
        />
      </div>
      <div>
        <button type = "submit">add</button>  
      </div>  
    </form>  
    <h2>Numbers</h2>
    <ul>
      <DisplayPerson persons={persons.filter(person => person.name.toLowerCase().includes(newFilter))} />
    </ul>
  </div>
)}

export default App