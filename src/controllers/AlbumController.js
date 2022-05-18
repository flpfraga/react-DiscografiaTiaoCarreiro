import {buscar, excluir, adicionar} from '../services/AlbumService'


export async function buscarAlbums(keywords){
    return await buscar(keywords)
}

export async function buscarPorId(id){
    
    const albuns = await buscar('')
    if (!albuns){
        alert("Erro! Tente carregar novamente")
        return false
    }
    const newAlbum = albuns.data.find(album=>album.id===id)
    
    return newAlbum
}

export async function deleteAlbum(id){
    return await excluir(id)
}

export async function adicionarAlbum(album){
    return await adicionar(album)
}