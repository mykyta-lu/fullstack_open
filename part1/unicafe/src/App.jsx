import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.name}</button>
const Statistic = (props) => <p>{props.name} : {props.value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} name='good'/>
      <Button handleClick={handleNeutralClick} name='neutrla'/>
      <Button handleClick={handleBadClick} name='bad'/>

      <h2>statistics</h2>
      <Statistic value={good} name='good' />
      <Statistic value={neutral} name='neutral' />
      <Statistic value={bad} name='bad' />
    </div>
  )
}

export default App