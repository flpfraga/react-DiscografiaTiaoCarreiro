import { adicionar, excluir } from "../services/FaixaService"


export async function adicionarFaixa(album_id, faixa){
   await adicionar(album_id, faixa)
}

export async function deleteFaixa (id){
    return await excluir(id)
}