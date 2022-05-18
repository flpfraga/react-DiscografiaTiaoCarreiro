import './render-disco.css'
import RenderItem from '../RenderItem'

import { Link } from 'react-router-dom'

export default function RenderDiscographLists(props) {
    return (
        <div className='box-album'>
            {props.albuns.map((album, a) => {
                return (
                    <div className='container-album' key={a}>
                        <div className='album-desc'>
                            <Link className='link' to={'albumedit/' + album.id}>
                                <p>Álbum: {album.name}, {album.year} </p>
                            </Link>
                            
                        </div>
                        <div className='lista-faixas' >
                            <ul>
                                <RenderItem key={0} item={{number:'N°', title:'Faixa',duration:'Duração'}}/>
                                {album.tracks.map((track, t) => {
                                    return <RenderItem item={track} key={t+1} />
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}