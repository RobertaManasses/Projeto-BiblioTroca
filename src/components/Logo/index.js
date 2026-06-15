import './estilo.css'
import logoImg from '../../images/logo512.png'


function Logo(){
    return(
        <div className='logo'>
            <img src={logoImg} className='imagemLogo'></img>
            <div className='texto'>
                <h1 className='titulo'>BiblioTroca</h1>
                <p className='slogan'>Seu app de troca de livros</p>
            </div>
        </div>
    )
}

export default Logo
