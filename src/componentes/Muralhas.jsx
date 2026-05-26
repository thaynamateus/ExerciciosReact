import styles from '../css/Muralhas.module.css'
import ComponenteProps from './ComponenteProps'
import ComponenteProps_cadastro from './ComponenteProps_cadastro'
import Bandeira_muralha from '../imagens/china.png'

function Muralhas(){
    return(

        <section className={styles.muralhas}>

        <h1>A Grande Muralha da China (长城) </h1>
        <ComponenteProps
            lugar="Muralha da China"
            texto="Conheça a Muralha da China, uma das maiores maravilhas do mundo e símbolo da história milenar chinesa. Caminhe por seus trechos impressionantes e viva uma experiência única."
            bandeira={Bandeira_muralha}
        />

        <ComponenteProps_cadastro/>


        </section>


    )
}

export default Muralhas