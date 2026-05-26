import styles from '../css/Home.module.css'
import mala from '../imagens/mala.jpg'

function Home(){

    return(
        <section className={styles.container_home}>
            <div className={styles.img}></div>
            
            <div className={styles.texto}>
                <h2>Encontre aqui a viagem dos seus sonhos!!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>

    )

}

export default Home