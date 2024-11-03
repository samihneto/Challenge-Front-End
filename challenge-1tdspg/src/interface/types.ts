export type TipoChamado = {
    clienteUserId: any;
    dataAbertura: string;
    idChamdo: any;
    oficinaUserId: any;
    status: string;
    veiculoIdVeiculo: any;
}

export interface TipoAgendamento {
    id: number; // agora id é opcional
    nota: string;
    dataAgendamento: string;
}