import { useState } from 'react'

function TodoList() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    if (input === '') return
    setTasks([...tasks, input])
    setInput('')
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: '10px' }}>
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList