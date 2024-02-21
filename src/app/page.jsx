import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function loadTasks() {
  const users = await prisma.task.findMany();
  console.log(users);
}

export default function Home() {
  return <h1>Tareas</h1>;
}
