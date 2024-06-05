import React from 'react'

const Todo = ({ todos }) => {
  
  return (
    <div>
        {todos.map((todos) => {
            return <div style={{
              border : "3px solid white",
              padding: 40,
              borderRadius: 10,
              margin: 10
          }}
            >
                <h1>{todos.first}</h1>
                <h1>{todos.second}</h1>
                <h1>{todos.third}</h1>
                <h1>{todos.fourt}</h1>
                <h1>{todos.fifth}</h1>
                <h1>{todos.sixth}</h1>
                <h1>{todos.seventh}</h1>
                <h1>{todos.eighth}</h1>
                </div>
        })}
    </div>
  )
}

export default Todo