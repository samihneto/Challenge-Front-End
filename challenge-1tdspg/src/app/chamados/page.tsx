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
        <table className="bg-blue-100 border-2 border-[#00102c] rounded-xl">
            <thead className="border-2 border-[#00102c]">
                <tr className="border-2 border-[#00102c]">
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">ID CLIENTE</th>
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">DATA ABERTURA</th>
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">ID CHAMADO</th>
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">ID OFICINA</th>
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">STATUS</th>
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">ID VEÍCULO</th>
                    <th className="text-[#00102c] border-2 border-[#00102c] p-2 font-semibold font-teko">Editar | Excluir</th>
                </tr>
            </thead>
            <tbody>
                {chamados.map( c=>(
                    <tr key={c.clienteUserId}>
                        <td>{c.dataAbertura}</td>
                        <td>{c.idChamdo}</td>
                        <td>{c.oficinaUserId}</td>
                        <td>{c.status}</td>
                        <td>{c.veiculoIdVeiculo}</td>
                        <td>Editar|Excluir</td>
                    </tr>                    
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={6}>
                        Quantidade de Chamados: {chamados.length}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}