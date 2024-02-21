import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
 
export function GET() {
    const tasks = prisma.task.findMany();
    return NextResponse.json(tasks)
}

export async function POST(request) {
    const { title, description } = await request.json();
    const newtask = await prisma.task.create({
        data: {
            title,
            description
        }
    })
    return NextResponse.json(newtask)
}