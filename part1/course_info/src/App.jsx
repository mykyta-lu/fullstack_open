const App = () => {
  const course = 'Halfstack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }



const Header = (props) => {
  return (
    <>
      <h1>{props.course_name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 part1 = {props.part1} exercise1 = {props.exercise1} />
      <Part2 part2 = {props.part2} exercise2 = {props.exercise2} />
      <Part3 part3 = {props.part3} exercise3 = {props.exercise3} />
    </div>
  )
}

const Part1 = (props) => {
  return (
    <>
      <p>
      {props.part1} {props.exercise1}
      </p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>
      {props.part2} {props.exercise2}
      </p>
    </>
  )
}

const Part3 = (props) => {
  return (
    <>
      <p>
      {props.part3} {props.exercise3}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
  )
}


  return (
    <div>
      <Header course_name={course} />
      <Content part1 = {part1.name}
               part2 = {part2.name}
               part3 = {part3.name}
               exercise1 = {part1.exercises}
               exercise2 = {part2.exercises}
               exercise3 = {part3.exercises}
      />
      <Total exercise1 = {part1.exercises}
             exercise2 = {part2.exercises}
             exercise3 = {part3.exercises}
      />
    </div>
  )
}

export default App