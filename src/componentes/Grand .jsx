import styles from '../css/Grand.module.css'
import ComponenteProps from './ComponenteProps'
import ComponenteProps_cadastro from './ComponenteProps_cadastro'
import Bandeira_grand from '../imagens/usa.png'

function Grand(){
    return(

        <section className={styles.grand}>

        <h1>A beleza do Grand Canyon</h1>
        <ComponenteProps
            lugar="Grand Canyon"
            texto="Explore o Grand Canyon e surpreenda-se com suas paisagens imensas e formações rochosas únicas. Um destino perfeito para quem ama natureza e aventura."
            bandeira={Bandeira_grand}
        />

        <ComponenteProps_cadastro/>


        </section>


    )
}

export default Grand 