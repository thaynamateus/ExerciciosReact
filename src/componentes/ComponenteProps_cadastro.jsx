import styles from '../css/ComponenteProps_cadastro.module.css'
import logo from '../imagens/logo.png'

function ComponenteProps_cadastro({ lugar, texto, bandeira }) {
    return (
        <div className={styles.formulario}>

        <img src={logo} alt="logo da agencia" className={styles.logo}/>

        <h2>Cadastre para mais informação</h2>

        <input type="text" placeholder="Nome completo" />

        <input type="email" placeholder="e-mail" />

        <input type="tel" placeholder="Telefone"/>
        <button>Confirmar</button>

        </div>


    )

}

export default ComponenteProps_cadastro