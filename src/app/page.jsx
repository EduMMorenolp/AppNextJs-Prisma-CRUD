import { PrismaClient } from '@prisma/client'
import TaskCard from './components/TaskCard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const prisma = new PrismaClient()

async function loadTasks() {
  return await prisma.task.findMany()
}

export default async function Home() {

  const tasks = await loadTasks()

  return ( 
    <div className="p-4 mx-auto mt-2">
      <Navbar></Navbar>
      <br></br>
      <h1 className="text-3xl font-bold text-center mb-4">Tareas</h1>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (<TaskCard task={task} key={task.id} />
        ))}
      </div>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
