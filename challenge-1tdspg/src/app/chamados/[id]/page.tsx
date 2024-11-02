"use client";

import Link from "next/link";

export default async function Chamado({ params }: { params: { id: string } }) {
  let chamado = null;

  try {
    const response = await fetch(`http://localhost:8080/mecanico/chamado/${params.id}`);

    // Log da resposta para depuração
    const responseText = await response.text();
    console.log("Resposta da API:", responseText);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    // Tente analisar a resposta como JSON
    chamado = JSON.parse(responseText);
  } catch (error) {
    console.error("Erro ao buscar chamado:", error);
  }

  if (!chamado) {
    return <div>Chamado não encontrado.</div>;
  }

  return (
<div>
  <div className="flex flex-col justify-center items-center gap-16 p-8">
    <h1 className="text-white font-archivo font-black text-7xl">Chamado {chamado.idChamdo}</h1>
    <ul className="p-5 bg-white rounded-lg shadow-xl flex flex-col gap-10">
      <li className="flex items-center justify-center gap-5">
        <h1 className="font-archivo font-black text-[#00102c] text-3xl">ID Cliente:</h1>
        <h1 className="font-teko font-black text-[#00102c] text-4xl">{chamado.clienteUserId}</h1>
      </li>
      <li className="flex items-center justify-center gap-5">
        <h1 className="font-archivo font-black text-[#00102c] text-3xl">Data Abertura:</h1>
        <h1 className="font-teko font-black text-[#00102c] text-4xl">{chamado.dataAbertura}</h1>
      </li>
      <li className="flex items-center justify-center gap-5">
        <h1 className="font-archivo font-black text-[#00102c] text-3xl">ID Veículo:</h1>
        <h1 className="font-teko font-black text-[#00102c] text-4xl">{chamado.veiculoIdVeiculo}</h1>
      </li>
      <li className="flex items-center justify-center gap-5">
        <h1 className="font-archivo font-black text-[#00102c] text-3xl">ID Oficina:</h1>
        <h1 className="font-teko font-black text-[#00102c] text-4xl">{chamado.oficinaUserId}</h1>
      </li>
      <li className="flex items-center justify-center gap-5">
        <h1 className="font-archivo font-black text-[#00102c] text-3xl">Status:</h1>
        <h1 className="font-teko font-black text-[#00102c] text-4xl">{chamado.status}</h1>
      </li>
    </ul>
    <button className="bg-blue-500 text-white font-archivo font-semibold p-3 rounded-lg hover:scale-105">
      <Link href="/chamados">
          Voltar para Chamados
      </Link>
      </button>
  </div>
</div>

  );
}
