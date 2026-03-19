import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskCard from './components/TaskCard'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(text) {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  function completeTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Pending') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  const pendingCount = tasks.filter(t => !t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Task Manager</h1>
          <p className="text-gray-500 mt-1">{pendingCount} tasks pending</p>
        </div>

        {/* Input */}
        <TaskInput onAdd={addTask} />

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          {['All', 'Pending', 'Completed'].map(btn => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === btn
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Tasks */}
        {filteredTasks.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">📋</p>
            <p className="text-lg">Koi task nahi mila!</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))
        )}

      </div>
    </div>
  )
}

export default App