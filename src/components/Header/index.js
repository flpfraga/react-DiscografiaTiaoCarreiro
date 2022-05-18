import './styles.css'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className="header">
            <Link to="/"> <div className='link-logo'>
                <img src={logo}></img>

            </div>
            </Link>
            <h1 className='title'>Discografia</h1>
        </div>
    )
}