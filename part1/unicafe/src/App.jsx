import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.name}</button>
const Statistic = (props) => <p>{props.name} : {props.value}</p>
const Statistics = ({ good, neutral, bad, calcAll, calcAvg, calcPositive}) => {

if (calcAll())
  return (
  <div>
    <h2>statistics</h2>
      <Statistic value={good} name='good' />
      <Statistic value={neutral} name='neutral' />
      <Statistic value={bad} name='bad' />

      <Statistic value={calcAll()} name='all' />
      <Statistic value={calcAvg()} name='average' />
      <Statistic value={calcPositive()} name='positive' />
  </div>
  )

  return (
    <div>
      <h2>statistics</h2>
      <p>No feedback Given</p>
    </div>
  ) 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  const calcAll = () => (good + neutral + bad)
  const calcAvg = () => (good + bad*(-1))/(good + neutral + bad) || 0
  const calcPositive = () => {
    let positivity = good/(good+neutral+bad)*100
    if (positivity) return positivity.toString() + '%'
    else return 0
  }
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} name='good'/>
      <Button handleClick={handleNeutralClick} name='neutrla'/>
      <Button handleClick={handleBadClick} name='bad'/>

      <Statistics good = {good}
      neutral = {neutral}
      bad = {bad}
      calcAll = {calcAll}
      calcAvg = {calcAvg}
      calcPositive = {calcPositive}
      />
      
    </div>
  )
}

export default App