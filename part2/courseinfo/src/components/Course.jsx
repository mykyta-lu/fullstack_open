const Course = ({ course }) => {
    
    const Header = ({ name }) => <h1>{name}</h1>

    const Total = ({ parts }) => 
      <b>
        
        Number of exercises {parts.reduce((acc, curr) => {
            return acc+curr.exercises
            }, 0
        )}
      </b>
    
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
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
}

export default Course