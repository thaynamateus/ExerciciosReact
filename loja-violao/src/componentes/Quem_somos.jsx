import styler from '../css/Quem_somos.module.css'

function Quem_somos() {

    return (
        <section className={styler.caixote_quem}>

            <div className={styler.texto}>
                <h1>Nossa loja - Instrumentos musicais</h1>
                <p>Se você é um amante da música, está em busca de um novo 
                instrumento musical e não abre mão da qualidade, chegou ao lugar
                certo! Aqui em nossa loja você encontra os melhores itens, como: 
                teclado, piano (digital e acústico),contrabaixo, bateria, guitarra,
                violão, sopro e muito mais! Nossos instrumentos possuem o selo de
                qualidade das melhores marcas do mercado! Escolha os seus favoritos 
                e os receba em casa com toda a comodidade que você precisa.
                Confira nossas opções disponíveis e tenha em mãos instrumentos de
                ponta!
                </p>
                 
            
            </div>

            <div className={styler.foto}></div>

        </section>
    )
}

export default Quem_somos