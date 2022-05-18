import { useState } from 'react'
import './novaFaixa.css'

import { AiFillCloseCircle } from 'react-icons/ai'

import { minForSec } from '../../functions/functions'

export default function NovaFaixa(props) {

    const [num, setNum] = useState(props.lastNumber + 1)
    const [nome, setNome] = useState('')
    const [tempo, setTempo] = useState(0)
    const [isNewTrack, setIsNewTrack] = useState(props.isNewTrack)

    function toogleIsNewTrack() {
        setNome('')
        setTempo('')
        if (isNewTrack) {
            setIsNewTrack(false)
            props.setIsNewTrack(false)
            return
        }
        props.setIsNewTrack(true)
        setIsNewTrack(true)

    }


    async function salvar() {
        if (!num || !nome || !tempo) {
            alert('Preencha todos os campos antes de prosseguir!!!')
            return
        }
        await props.addNovaFaixa({ number: num, title: nome, duration: minForSec(tempo) })
    }


    return (

        <div className="container-nova-faixa">
            {props.isNewTrack ? (
                <div className="container-button">
                    <button
                        onClick={() => toogleIsNewTrack()}>
                        <h4>
                            Adicionar Nova Faixa
                        </h4>
                    </button>
                </div>) :
                (
                    <div className='container-submit'>
                        <div className='close-button'>
                            <button onClick={() => { toogleIsNewTrack() }}>
                                <AiFillCloseCircle size={20} />
                            </button>
                        </div>

                        <div className="container-input">
                            <input
                                placeholder='N°'
                                value={num ? num : ''}
                                onChange={(text) => { setNum(text.target.value) }}
                            ></input>
                            <input
                                placeholder='Nome'
                                value={nome ? nome : ''}
                                onChange={(text) => { setNome(text.target.value) }}
                            ></input>
                            <input
                                placeholder='Duração Ex: 1:23'
                                value={tempo ? tempo : ''}
                                onChange={(text) => { setTempo(text.target.value) }}
                            ></input>

                        </div>
                        <div className='submit-button'>
                            <button onClick={() => salvar()}>Salvar</button>
                        </div>
                    </div>
                )}


        </div>
    )
}