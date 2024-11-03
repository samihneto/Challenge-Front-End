import { NextResponse } from "next/server";
import fs from "fs/promises";

// Definindo o tipo para os agendamentos
interface Agendamento {
    id: number;
    nota: string;
    dataAgendamento: string;
}

export async function GET() {
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    return NextResponse.json(JSON.parse(file));
}

export async function POST(request: Request) {
    const { nota, dataAgendamento } = await request.json();

    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    const data = JSON.parse(file);

    const newAgendamento: Agendamento = {
        id: data.agendamentos[data.agendamentos.length - 1].id + 1,
        nota,
        dataAgendamento,
    };

    data.agendamentos.push(newAgendamento);

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(data));
    return NextResponse.json({ message: "Produto adicionado com sucesso!" });
}

// Método PUT - Atualiza um agendamento existente com base no ID
export async function PUT(request: Request) {
    const { id, nota, dataAgendamento } = await request.json();
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    const data = JSON.parse(file);

    // Usando a interface `Agendamento` para tipar corretamente
    const index = data.agendamentos.findIndex((agendamento: Agendamento) => agendamento.id === id);
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
export async function DELETE(request: Request) {
    const { id } = await request.json();
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json', 'utf8');
    const data = JSON.parse(file);

    const index = data.agendamentos.findIndex((agendamento: Agendamento) => agendamento.id === id);
    if (index === -1) {
        return NextResponse.json({ message: "Agendamento não encontrado" }, { status: 404 });
    }

    data.agendamentos.splice(index, 1);

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(data));
    return NextResponse.json({ message: "Agendamento removido com sucesso!" });
}