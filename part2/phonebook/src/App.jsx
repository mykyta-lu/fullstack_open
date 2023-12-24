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

const DisplayNotification = ({message}) => {
  if (message == '') {
    return <div></div>
  }

  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  return (
   <div style={notificationStyle} className='notification'>
      {message}
   </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  // get all persons from json file on the server and update person list 
  useEffect(() => {
    phoneService.getAll().then(initialPersones => {
        setPersons(initialPersones)
      })
  },[])

  const addNumber = (event) => {
    event.preventDefault()

    // new number object
    const numberObj = {
      name: newName,
      number: newNumber
    }
    const newPerson = persons.filter(person => person.name === newName)
    // check if persons array has a person with entered name
    if (newPerson.length) {
      if (window.confirm('a person is already in phone book. Do you want to change a number?')) {
        const id = newPerson[0].id
        phoneService
          .update(id, numberObj)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id !== id ? person : updatedPerson))

            //show message if update succesfull    
            setNotificationMessage(`Updated ${updatedPerson.name}`)
            setTimeout(() => {
              setNotificationMessage('')
            }, 5000)
          })
      }
      return setNewName(newName)
    }

    // default behavior: add a new person to the phonebook
    phoneService.create(numberObj).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))

       //show message if delete succesfull    
       setNotificationMessage(`Added ${returnedPerson.name}`)
       setTimeout(() => {
         setNotificationMessage('')
       }, 5000)
    })
    setNewName('')
    setNewNumber('')
  }

  // delete person from the phonebook
  const triggerDelete = id => {
    if (window.confirm("Do you really want to delete?")) {
      const deletedPerson = persons[id-1].name
      phoneService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))

         //show message if delete succesfull    
        setNotificationMessage(`Deleted ${deletedPerson}`)
        setTimeout(() => {
          setNotificationMessage('')
        }, 5000)
      })
    }
  }

return (
  <div>
    <DisplayNotification message={notificationMessage} />
    <DislpayFilter newFilter={newFilter} setFilter={setFilter} />
    <DisplayAddNew addNumber={addNumber} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
    <DisplayPerson triggerDelete={triggerDelete} persons={persons.filter(person => person ? person : person.name.toLowerCase().includes(newFilter))} />
  </div>
)}

export default App