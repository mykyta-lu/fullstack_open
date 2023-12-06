import { useState } from 'react'

const MostVotedAnecdote = ({anecdotes}) => {
  
  const points = anecdotes.map(anecdote => anecdote.points)
  
  return (
    <div>
      <p>{anecdotes[points.indexOf(Math.max(...points))].anecdote}</p>
    </div>
  )
}

const App = () => {
  const [anecdotes, setPoints] = useState([
    {
      anecdote: 'If it hurts, do it more often.',
      points: 0
    },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      points: 0
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      points: 0
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      points: 0
    },
    {
      anecdote: 'Premature optimization is the root of all evil.',
      points: 0
    },
    {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      points: 0
    },
    {
      anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      points: 0
    },
    {
      anecdote: 'The only way to go fast, is to go well.',
      points: 0
    }
  ])

  const [selected, setSelected] = useState(0)

  const handleClickNext = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))
  const handleClickVote = () => {
    const currentPoints = anecdotes[selected].points
    anecdotes[selected].points = currentPoints + 1
  }

  return (
    <div>
      <p>{anecdotes[selected].anecdote}</p>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>
      <MostVotedAnecdote anecdotes={anecdotes} />
    </div>
  )
  
}

export default App