import { NextResponce } from "next/response";
import { prisma } from "@/lib/prisma";


export async function GET() {
    const tasks = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }});
    return NextResponce.json(tasks)
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const tasksupdate = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    });  
    return NextResponce.json("actualizando tareas" + tasksupdate)
}

export async function DELETE(request, { params }) {
    try {
    const taskseliminado = await prisma.task.DELETE({
        where: {
            id: Number(params.id)
        }});
    return NextResponce.json(taskseliminado)
    } catch (error) {
    return NextResponce.json("error no existe la tarea"+ params.id)}
}

