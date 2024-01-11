import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Title = ({title}) => (
  <h1>{title}</h1>
)
const TextDisplay = ({anecdote}) => (
  <p>{anecdote}</p>
)
const VotesDisplay = ({votes}) => (
  <p> has {votes} votes</p>
)

// const MaxVotes = () => (

// )
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  let Val = anecdotes.length
  const [points, setArray] = useState(Array(Val).fill(0))

  const SetRandom = () => (
    setSelected(Math.floor(Math.random() * (Val)))
  )
  const SetVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setArray(copy)
  }
    const MaxVal = Math.max(...points)
    const index = points.indexOf(MaxVal)
    console.log(points)
  return (
    <div>
      <Title title="Anecdote of the Day" />
      <TextDisplay anecdote={anecdotes[selected]}/>
      <VotesDisplay votes={points[selected]}/>
      <Button handleClick={() => SetVote()} text="vote"/>
      <Button handleClick={() => SetRandom()} text="next anecdote"/>
      <Title title="Anecdote with most votes" />
      <TextDisplay anecdote={anecdotes[index]}/>
      <VotesDisplay votes={MaxVal}/>
    </div>
  )
}

export default App