
"use client"
import { useRouter } from "next/navigation";

function TaskCard({task}) {

    const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:bg-slate-300 hover:cursor-pointer"
    onClick={() => {
      router.push("/tasks/edit/" + task.id)
    }}
    >
            <p className="text-lg font-medium">{task.title}</p>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500"> {new Date(task.createdAt).toLocaleString('es-ES', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'})}</p>
          </div>
  )
}

export default TaskCard