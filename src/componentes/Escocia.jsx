import styles from '../css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import ComponenteProps_cadastro from './ComponenteProps_cadastro'
import Bandeira_escocia from '../imagens/escocia.png'

function Escocia(){
    return(

        <section className={styles.escocia}>

        <h1>Venha conhecer a Escócia!!</h1>
        <ComponenteProps
            lugar="Escócia"
            texto="Explore a Escócia e encante-se com seus castelos, montanhas e histórias fascinantes. Um destino perfeito para quem busca beleza, cultura e aventura."
            bandeira={Bandeira_escocia}
        />

        <ComponenteProps_cadastro/>


        </section>


    )
}

export default Escocia