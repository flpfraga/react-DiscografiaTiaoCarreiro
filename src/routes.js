import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AlbumEdit from './pages/AlbumEdit'

import Home from './pages/Home'

import Error from './pages/Error'


export default function RouteApp (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/albumedit/:id" element={<AlbumEdit/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}