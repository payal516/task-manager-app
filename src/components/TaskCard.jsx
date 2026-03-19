function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className={`flex items-center justify-between p-4 mb-3 rounded-xl border transition-all ${
      task.completed
        ? 'bg-green-50 border-green-200'
        : 'bg-white border-gray-200 hover:border-blue-300'
    }`}>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />
        <span className={`text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500 transition-all text-xl font-bold"
      >
        ×
      </button>

    </div>
  )
}

export default TaskCard