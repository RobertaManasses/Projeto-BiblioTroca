import './estilo.css'
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
            <ul className='lista'>
                <li className='item'>
                    <img src={homeIcon} className='icone'></img>
                    <p className='item-texto'>Página Inicial</p>
                </li>
                <li className='item'>
                    <img src={livroMaisIcon} className='icone'></img>
                    <p className='item-texto'>Cadastro de Livros</p>
                </li>
                <li className='item'>
                    <img src={usuarioIcon} className='icone'></img>
                    <p className='item-texto'>Perfil</p>
                </li>
            </ul>
            <ul className='lista fim-pagina'>
                <li className='item'>
                    <img src={logOutIcon} className='icone'></img>
                    <p className='item-texto'>Log Out</p>
                </li>
            </ul>
        </div>
    )
}

export default ItensMenuLateral
