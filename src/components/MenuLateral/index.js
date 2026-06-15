import './estilo.css'
import Logo from '../Logo'
import ItensMenuLateral from '../ItensMenuLateral'

function MenuLateral(){
    return(
        <div className='menu-lateral'>
            <Logo></Logo>
            <ItensMenuLateral></ItensMenuLateral>
            
        </div>
    )
}

export default MenuLateral
