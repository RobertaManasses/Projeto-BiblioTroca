import './estilo.css'
import Logo from '../Logo'

function MenuLateral(){
    return(
        <div className='menu-lateral'>
            <Logo></Logo>
            <ul>
                <li>Página Inicial</li>
                <li>Cadastro de Livros</li>
                <li>Perfil</li>
            </ul>
            <ul>
                <li>Log out</li>
            </ul>
            
        </div>
    )
}

export default MenuLateral
