const Course = ({ course }) => {
    
    const Header = ({ course }) => <h1>{course.name}</h1>

    //const Total = ({ sum }) => <p>Number of exercises {sum}</p>
    
    const Part = ({ part }) => 
      <p>
        {part.name} {part.exercises}
      </p>
    
    const Content = ({ parts }) => 
      <>
        {parts.map(part => <Part
          key={part.id}
          part={part} 
        />)}     
      </>

    return (
        <div>
          <Header course={course} />
          <Content parts={course.parts} />
          {/*<Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
        </div>
      )
}

export default Course