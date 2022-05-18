import './render-item.css'

import { useState } from 'react'

import { AiFillDelete } from 'react-icons/ai'

import { secForMin } from '../../functions/functions'

export default function RenderItem(props) {

    const [editable, setEditable] = useState(props.editable || false)

    function secondForMinute(number) {
        if (typeof(number)=='string'){
            return number
        }
       
        return secForMin(number)

    }
    return (
            <li>
                <div className='container-faixa' >
                    <p >{props.item.number}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.item.title}</p>
                    <div className='end-list'>
                        <p>{secondForMinute(props.item.duration)}</p>
                        {editable ? (
                            <button
                            onClick={()=>{props.delete(props.item.id)}}
                            >
                                <AiFillDelete size={20}/>
                            </button>
                        ) : (<></>)}
                    </div>
                </div>
            </li>
        
    )
}