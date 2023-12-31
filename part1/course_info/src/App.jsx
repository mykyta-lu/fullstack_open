const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }



const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part course = {props.course} partNum = {0} />
      <Part course = {props.course} partNum = {1}/>
      <Part course = {props.course} partNum = {2}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
      {props.course.parts[props.partNum].name} {props.course.parts[props.partNum].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts.reduce((summ, current) => summ + current.exercises, 0)}</p>
  )
}


  return (
    <div>
      <Header course = {course} />
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App