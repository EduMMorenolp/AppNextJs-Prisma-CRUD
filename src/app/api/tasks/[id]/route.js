import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request,{params}) {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(params.id),
            },
        });
        return NextResponse.json(task);
    } catch (error) {
        console.error(error);
        return NextResponse.error("Error al buscar la tarea");
    }
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const tasksupdate = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    });
    return NextResponse.json("actualizando tareas" + tasksupdate)
}

export async function DELETE(request, { params }) {
    try {
        const taskseliminado = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        });
        return NextResponse.json(taskseliminado)
    } catch (error) {
        return NextResponse.json("error no existe la tarea" + params.id)
    }
}

