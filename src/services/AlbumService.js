import api from "./api";

export async function buscar(keyword) {

    try {
        const response = await api.get('/api/album', {
            params: {
                keyword: keyword
            }
        })
        return response.data
    } catch (error) {
        alert(error.response.data.error)
        return false
    }
    
}

export async function adicionar(album) {
   
    try {
        const response = await api.post('/api/album',album)
        
        return response
    } catch (error){
       
        alert(error.response.data.error)
        return false
    }
}

export async function excluir(id) {
    try {
        const response = await api.delete('/api/album/'+`${id}`)
        return response
    } catch (error){
        alert(error.response.data.error)
        return false
    }
}


