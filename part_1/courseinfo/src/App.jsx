const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    props.parts.map(value => <p> {value.name} {value.exercises} </p>)
  )
}
const Content = (props) => {
  return(
    <div>
      <Part parts={props.parts}/>

    </div>
  )
}

const Total = (props) => {
  let val1 = 0 
  props.parts.map(value => val1 = val1 + value.exercises )
  // const val = props.parts.map(value => )
  return(
    <p> Number of exercises {val1} </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App