import styler from '../css/Forms.module.css'

function Forms() {

    return (
        <section className={styler.for}>
            <form>
                <label>Entre com o seu nome</label>
                <input type="text" placeholder="Digite seu nome aqui:" />

                <label>Entre com o seu e-mail</label>
                <input type="email" placeholder="Digite seu email aqui:" />

                <textarea placeholder="Faça seu pedido por aqui:"></textarea>

                <button type="submit">Enviar</button>
            </form>
            <div className={styler.contato}>
                <h2 >Acesse também nossas redes sociais:</h2>

                <section className={styler.redes_caixa}>
                    <div className={styler.whats}></div>
                    <div className={styler.insta}></div>
                    <div className={styler.face}></div>
                </section>
            </div>
        </section>


    )
}

export default Forms