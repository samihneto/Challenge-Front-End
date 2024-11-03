export type TipoChamado = {
    clienteUserId: number;
    dataAbertura: string;
    idChamdo: number | string;
    oficinaUserId: number;
    status: string;
    veiculoIdVeiculo: number;
}

export interface TipoAgendamento {
    id: number; // agora id é opcional
    nota: string;
    dataAgendamento: string;
}