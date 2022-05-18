import Header from "../../components/Header";

import { useState } from "react";

import RenderDiscographLists from "../../components/RenderDiscographLists";

import { buscarAlbums, adicionarAlbum } from '../../controllers/AlbumController'

import { AiFillCloseCircle } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'

import { Spinner } from "react-activity";

import './home.css'

export default function Home() {


    const [data, setData] = useState([{}])
    const [search, setSearch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [response, setResponse] = useState([{}])
    const [inputAlbumName, setInputAlbumName] = useState('')
    const [inputAlbumYear, setInputAlbumYear] = useState('')
    const [addAlbum, setAddAlbum] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function carregarDados() {
        setLoading(true)
        const reponse = await buscarAlbums(searchText)
        console.log(reponse)
        setResponse(reponse.data)
        setSearch(true)
        setLoading(false)
    }

    function a() {
        setData(response[0].data)
    }
    function toogleAddAlbum() {
        setInputAlbumName('')
        setInputAlbumYear('')
        if (addAlbum) {
            setAddAlbum(false)
            return
        }
        setAddAlbum(true)
    }

    async function criarNovoAlbum() {
        if (!inputAlbumName || !inputAlbumYear) {
            alert('Preencha os campos antes de prosseguir')
            return
        }
        const response = await adicionarAlbum({ name: inputAlbumName, year: inputAlbumYear })

        if (response) {
            console.log(response.data.id)
            console.log('dentro do reponse')
            navigate('/albumedit/' + response.data.id)
        }


    }

    return (
        <div className="main" >
            <Header />
            <div className="box-view">
                <div className="search">
                    <h4 className="text">Digite uma palavra chave</h4>
                    <div className="input">
                        <input
                            placeholder="Ex: Rei do Gado"
                            value={searchText ? searchText : ''}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="input-field"
                        />
                        <button
                            onClick={() => carregarDados()}>Procurar</button>
                    </div>
                </div>

                <div className="album-details">
                    {loading ?
                        (
                            <div className="loading-status">
                                <Spinner size={50}/>
                            </div>
                        ) : (<>{search ?
                            (<RenderDiscographLists albuns={response} />)
                            :
                            (<></>)}</>)}
                </div>
            </div>
            <div className="container-new-album">
                {addAlbum ?
                    (<div className="new-album-input">
                        <div className="container-close-button">
                            <button 
                                onClick={() => { toogleAddAlbum() }}
                            >
                                <AiFillCloseCircle size={20} />
                            </button>
                        </div>
                        <div>
                            <input
                                placeholder="Nome do Album"
                                value={inputAlbumName ? inputAlbumName : ''}
                                onChange={(text) => { setInputAlbumName(text.target.value) }}
                            ></input>
                            <input
                                placeholder="Ano do Album"
                                value={inputAlbumYear ? inputAlbumYear : ''}
                                onChange={(text) => { setInputAlbumYear(text.target.value) }}
                            ></input>

                            <button className="album-submit"
                                onClick={() => { criarNovoAlbum() }}>
                                Salvar
                            </button>
                        </div>
                    </div>) :
                    (

                        <button className="new-album-button"
                            onClick={() => { toogleAddAlbum() }}>
                            Novo Album
                        </button>
                    )}



            </div>
        </div >
    )
}