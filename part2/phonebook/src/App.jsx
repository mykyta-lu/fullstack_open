import { useState, useEffect } from 'react'
import axios from 'axios'
import phoneService from './services/phones'

const DisplayPerson = ({persons, triggerDelete}) => {
  return (<>
    <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number} <button onClick={() => triggerDelete(person.id)}>delete</button></li>)}
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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    phoneService.getAll().then(initialPersones => {
        setPersons(initialPersones)
      })
  },[])

  const addNumber = (event) => {
    event.preventDefault()
    const numberObj = {
      name: newName,
      number: newNumber
    }
    const newPerson = persons.filter(person => person.name === newName)
    const id = newPerson[0].id
    if (newPerson.length) {
      if (window.confirm('a person is already in phone book. Do you want to change a number?')) {
        phoneService
          .update(id, numberObj)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id !== id ? person : updatedPerson))
          })
      }
      return setNewName(newName)
    }

    phoneService.create(numberObj).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    })
    setNewName('')
    setNewNumber('')
  }

  const triggerDelete = id => {
    if (window.confirm("Do you really want to delete?")) {
      phoneService
      .deletePerson(id)
      .then(() => 
        setPersons(persons.filter(person => person.id !== id)))
    }
  }

return (
  <div>
    <DislpayFilter newFilter={newFilter} setFilter={setFilter} />
    <DisplayAddNew addNumber={addNumber} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
    <DisplayPerson triggerDelete={triggerDelete} persons={persons.filter(person => person ? person : person.name.toLowerCase().includes(newFilter))} />
  </div>
)}

export default App