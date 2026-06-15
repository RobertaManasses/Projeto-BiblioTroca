import './estilo.css'
import { Link } from 'react-router-dom'
import homeIcon from '../../images/icon/home2-icon.svg'
import livrosIcon from '../../images/icon/livros-icon.svg'
import livroMaisIcon from '../../images/icon/livro-mais-icon.svg'
import configIcon from '../../images/icon/config-icon.svg'
import usuarioIcon from '../../images/icon/usuario-icon.svg'
import sinoIcon from '../../images/icon/sino-icon.svg'
import logOutIcon from '../../images/icon/log-out-icon.svg'


function ItensMenuLateral(){
    return(
        <div className='itens-menu-lateral'>
            <div className='lista'>
                <Link to="/" className='item'>
                    <img src={homeIcon} className='icone'></img>
                    <p className='item-texto'>Página Inicial</p>
                </Link>
                <Link to="/meusLivros" className='item'>
                    <img src={livrosIcon} className='icone'></img>
                    <p className='item-texto'>Meus Livros</p>
                </Link>
                <Link to="/cadastroLivros" className='item'>
                    <img src={livroMaisIcon} className='icone'></img>
                    <p className='item-texto'>Cadastro de Livros</p>
                </Link>
                <Link to="/perfil" className='item'>
                    <img src={usuarioIcon} className='icone'></img>
                    <p className='item-texto'>Perfil</p>
                </Link>
            </div>
            <div className='lista fim-pagina'>
                <Link to="/" className='item'>
                    <img src={logOutIcon} className='icone'></img>
                    <p className='item-texto'>Log Out</p>
                </Link>
            </div>
        </div>
    )
}

export default ItensMenuLateral
