import { useState } from 'react'

const DisplayPerson = ({persons}) => {
  return (<>
    <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
  </>)
}

const DisplayAddNew = ({addNumber, newName, setNewName, newNumber, setNewNumber}) => {
  return (<>
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
  </>)
}

const DislpayFilter = ({newFilter, setFilter}) => {
  return (
  <>
    <h2>Phonebook</h2>
      <input 
        value={newFilter}
        onChange={(event) => setFilter(event.target.value)}
      />
  </>
  )
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
    <DislpayFilter newFilter={newFilter} setFilter={setFilter} />
    <DisplayAddNew addNumber={addNumber} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
    <DisplayPerson persons={persons.filter(person => person.name.toLowerCase().includes(newFilter))} />
  </div>
)}

export default App