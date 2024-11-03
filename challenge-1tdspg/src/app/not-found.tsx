import Image from "next/image";

import erro from "@/assets/imgs/content/not-found/erro.png";

export default async function NotFound() {
    
    return (
        <div className="flex flex-col gap-1 p-8 justify-center items-center">
            <h1 className="text-white font-black font-archivo text-3xl"> Erro 404! Ops, a página não foi encontrada! </h1>
            <Image src={erro} width={900} height={450} alt={"Imagem de Erro!"}></Image>
        </div>
    )
}