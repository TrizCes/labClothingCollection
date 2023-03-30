import { IModelos } from "./modelos";

export interface IColecoes{
  id: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orcamento: number;
  ano: number;
  modelos: IModelos[];
}


