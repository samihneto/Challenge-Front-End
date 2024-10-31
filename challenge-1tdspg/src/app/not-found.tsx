import Image from "next/image";

import erro from "@/public/imgs/content/not-found/erro.png";

export default async function NotFound() {
    
    return (
        <div>
            <h1> Erro 404! Ops, a página não foi encontrada! </h1>
            <Image src={erro} alt={""}></Image>
        </div>
    )
}