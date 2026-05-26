import { Link } from 'react-router-dom'
import styles from '../css/Header.module.css'
import logo from '../imagens/viagens.jpg'
import lupa from '../imagens/lupa.png'

function Header(){
    
    return(
        <header>
        <img src={logo} alt="logo da agencia de viagem" className={styles.logo_agencia}/>

        <nav className={styles.menu}>
            <ul>
                <li><Link to='/'>home</Link></li>
                
                <li><Link to='/Aruba'>Aruba</Link></li>
                
                <li><Link to='/Escocia'>Escocia</Link></li>
                
                <li><Link to='/Muralhas'>Muralhas da China</Link></li>
                
                <li><Link to='/Grand'>Grand Canyon</Link></li>
                
            </ul>
        </nav>

        <div>
            <input type="search" className={styles.busca}/>
        </div>

        <div>
            <img src={lupa} alt="lupa" className={styles.lupa}/>
        </div>
        </header>

    )
}

export default Header