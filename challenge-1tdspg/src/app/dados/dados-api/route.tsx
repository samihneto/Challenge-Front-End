import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(request: Request, { params }: any) {
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    return NextResponse.json(JSON.parse(file))
}

export async function POST(request: Request) {
    const { id, nota, dataAgendamento } = await request.json();

    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8')
    const data = JSON.parse(file);

    const newAgendamento = {
        id:data.agendamentos[data.agendamentos.length-1].id + 1,
        nota,
        dataAgendamento,
    };

    data.agendamentos.push(newAgendamento);

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(data));
    return NextResponse.json({ message: "Produto adicionado com sucesso!" })
}

// Método PUT - Atualiza um agendamento existente com base no ID
export async function PUT(request: Request, { params }: any) {
    const { id, nota, dataAgendamento } = await request.json();
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    const data = JSON.parse(file);

    const index = data.agendamentos.findIndex((agendamento: any) => agendamento.id === id);
    if (index === -1) {
        return NextResponse.json({ message: "Agendamento não encontrado" }, { status: 404 });
    }

    data.agendamentos[index] = {
        ...data.agendamentos[index],
        nota,
        dataAgendamento,
    };

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(data));
    return NextResponse.json({ message: "Agendamento atualizado com sucesso!" });
}

// Método DELETE - Remove um agendamento com base no ID
export async function DELETE(request: Request, { params }: any) {
    const { id } = await request.json();
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    const data = JSON.parse(file);

    const index = data.agendamentos.findIndex((agendamento: any) => agendamento.id === id);
    if (index === -1) {
        return NextResponse.json({ message: "Agendamento não encontrado" }, { status: 404 });
    }

    data.agendamentos.splice(index, 1);

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(data));
    return NextResponse.json({ message: "Agendamento removido com sucesso!" });
}