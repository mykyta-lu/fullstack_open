import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const numbetObj = {
      name: newName
    }

    setPersons(persons.concat(numbetObj))
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
      <button type = "submit">add</button>  
    </div>  
  </form>  
  <h2>Numbers</h2>
  <ul>
    {persons.map(person => <li key={person.name}>{person.name}</li>)}
  </ul>
</div>

  )
}

export default App