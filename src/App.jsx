import './App.css'
import { useEffect, useState } from 'react'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([])

  const apiUrl = "http://localhost:5005/tasks"


  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setTasks(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
    
      {tasks.map((task) => {
        return (
          <Task
            key={task._id}
            task={task}
          />
        )
      })

      }
    </>
  )
}

export default App
