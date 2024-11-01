"use client"
import { TipoChamado } from "@/interface/types"
import { useEffect, useState } from "react"

export default function Chamados() {

    const [chamados, setChamados] = useState<TipoChamado[]>([]);

    useEffect(() => {
        const chamadaApiJava = async ()=>{
            const response = await fetch("http://localhost:8080/mecanico/chamado");
            const data = await response.json();
            setChamados(data);
        }

        chamadaApiJava();
    }, [])
    
  return (
<div className="flex flex-col justify-center items-center p-4 gap-y-6">
    <h1 className="text-white text-5xl font-black">Tabela de Chamados</h1>
    <table className="rounded-xl">
        <thead className="border-b-2">
            <tr>
                <th className="text-white p-2 font-semibold font-archivo">ID CLIENTE</th>
                <th className="text-white p-2 font-semibold font-archivo">DATA ABERTURA</th>
                <th className="text-white p-2 font-semibold font-archivo">ID CHAMADO</th>
                <th className="text-white p-2 font-semibold font-archivo">ID VEÍCULO</th>
                <th className="text-white p-2 font-semibold font-archivo">ID OFICINA</th>
                <th className="text-white p-2 font-semibold font-archivo">STATUS</th>
                <th className="text-white p-2 font-semibold font-archivo">Editar | Excluir</th>
            </tr>
        </thead>
        <tbody>
            {chamados.map(c => (
                <tr key={c.clienteUserId} className=""> {/* Adiciona a borda inferior */}
                    <td className="text-white p-2">{c.dataAbertura}</td>
                    <td className="text-white p-2">{c.idChamdo}</td>
                    <td className="text-white p-2">{c.oficinaUserId}</td>
                    <td className="text-white p-2">{c.status}</td>
                    <td className="text-white p-2">{c.veiculoIdVeiculo}</td>
                    <td className="text-white p-2">Editar|Excluir</td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={7} className="flex text-white">
                    Quantidade de Chamados: {chamados.length}
                </td>
            </tr>
        </tfoot>
    </table>
</div>
  )
}