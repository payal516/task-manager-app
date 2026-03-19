import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  function handleAdd() {
    if (text.trim() === '') return
    onAdd(text)
    setText('')
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Koi nayi task likho..."
        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-400 bg-white text-gray-800 placeholder-gray-400"
      />
      <button
        onClick={handleAdd}
        className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all"
      >
        Add
      </button>
    </div>
  )
}

export default TaskInput