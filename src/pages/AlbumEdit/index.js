import RenderItem from "../../components/RenderItem"

import './album.css'

import { buscarPorId, deleteAlbum } from "../../controllers/AlbumController"

import { adicionarFaixa, deleteFaixa } from "../../controllers/FaixaController"

import { useEffect, useState } from "react"

import { useParams, useNavigate } from 'react-router-dom'

import Header from "../../components/Header"

import NovaFaixa from "../../components/NovaFaixa"

import { Spinner } from "react-activity";

import "react-activity/dist/library.css";



export default function AlbumEdit() {

    const { id } = useParams();
    const [album, setAlbum] = useState({})
    const [isNewTrack, setIsNewTrack] = useState(true)
    const [load, setLoad] = useState(false)
    const [numFaixa, setNumFaixa] = useState()
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => { //função para carregar as faixas do album selecionado
        let isActive = true;
        const ac = new AbortController();
        async function getAlbum() {

            const response = await buscarPorId(id ? Number.parseInt(id) : null)
            setAlbum(response)
            setLoad(true)
            setNumFaixa(response.tracks.length)
            setLoading(false)

        }
        getAlbum();
        return () => {
            isActive = false;
            ac.abort();
        }
    }, [])

    async function novaFaixa(faixa) { //adiciona nova faixa ao album
        setLoading(true)
        const response = await adicionarFaixa(album.id, faixa)
        if (response) {
            album.tracks.push(faixa)
            setIsNewTrack(true)

        }
        window.location.reload() //recarregar página após a inserção
        setLoading(false)
    }

    async function excluirAlbum() { //excluir todo o album
        const response = await deleteAlbum(album.id)
        if (response) {
            alert('Album excluído com sucesso!')
            navigate('/') //redirecionamento para página inicial após excluir o album
        }
    }

    async function excluirFaixa(id) { //excluir faixa de um album
        setLoading(true)
        const response = await deleteFaixa(id)
        if (response) {
            const tracks = album.tracks.filter(track => track.id !== id)
            album.tracks = tracks

        }
        window.location.reload() //recarregar página após a exclusão
        setLoading(false)
    }

    return (
        <div className="main">
            <Header />

            <div className="container-album">
                {loading ?
                    (
                        <div className="loading-status{">
                            <Spinner size={50}/>
                        </div>
                    ) :
                    (
                        <>
                            <div className="album-description">
                                <p>Álbum: {album.name}, {album.year} </p>
                                <button onClick={() => { excluirAlbum() }}>Excluir Album</button>

                            </div>
                            <div className="album-faixas">
                                {load ? (
                                    <ul>
                                        <RenderItem item={{ number: 'N°', title: 'Faixa', duration: 'Duração' }} />
                                        {album.tracks.map((track, t) => {
                                            return <RenderItem
                                                item={track}
                                                key={t} editable={true}
                                                delete={(id) => { excluirFaixa(id) }} />
                                        })}
                                    </ul>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="container-nova-faixa">
                                <NovaFaixa
                                    isNewTrack={isNewTrack}
                                    setIsNewTrack={(value) => setIsNewTrack(value)}
                                    addNovaFaixa={(faixa) => { novaFaixa(faixa) }}
                                    lastNumber={numFaixa}
                                />
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}