import api from "./api";

export async function adicionar(album_id, faixa) {

    try {
        const response = await api.post('/api/track',{
            album_id,
            number: faixa.number,
            title: faixa.title,
            duration: faixa.duration
        })
        
        return response
    }
    catch (error) {
        alert(error.response.data.error)
        return false
    }
}

export async function excluir(id) {
    try {
        const response = await api.delete('/api/track/'+`${id}`)
        return response
    }
    catch (error) {
        alert(error.response.data.error)
        return false
    }
}