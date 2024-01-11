import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StaticsLine = ({text, value}) => {
  if (text === "positive") {
    return (
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
    )
  }
  return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  console.log({all})
  if (all === 0) {
    return (
      <div>
        <p> No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <table>
      <tbody>
      <StaticsLine text="good" value={good} />
      <StaticsLine text="neutral" value={neutral} />
      <StaticsLine text="bad" value={bad} />
      <StaticsLine text="all" value={all} />
      <StaticsLine text="average" value={((1*good) + (-1*bad))/all} />
      <StaticsLine text="positive" value={(good/all)*100} />
      </tbody>
      </table>
      </div>
  )
  
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1> give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App