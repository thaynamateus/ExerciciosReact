import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import ComponenteProps_cadastro from './ComponenteProps_cadastro'
import Bandeira_aruba from '../imagens/aruba.png'

function Aruba(){
    return(

        <section className={styles.aruba}>

        <h1>Se apaixone por Aruba</h1>

        <ComponenteProps
            lugar="Aruba"
            texto="Descubra Aruba e apaixone-se por suas praias de areia branca, mar cristalino e clima perfeito o ano todo. Um destino ideal para relaxar e aproveitar o melhor do Caribe.."
            bandeira={Bandeira_aruba}
        />

        <ComponenteProps_cadastro/>


        </section>


    )
}

export default Aruba