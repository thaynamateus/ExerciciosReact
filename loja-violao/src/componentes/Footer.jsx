import styler from '../css/Footer.module.css'

function Footer() {

    return (
        <section className={styler.ultimo}>
            <div className={styler.tex_footer}>
                <h3>Nossa loja - Instrumentos Musicais</h3>
                <p> Rua Tito, 54 - Lapa</p>
                <p> São Paulo - Brasil</p>
            </div>
            <div className={styler.redes_footer}>
            <div className={styler.whats_footer}></div>
            <div className={styler.insta_footer}></div>
            <div className={styler.face_footer}></div>
            </div>

        </section>
    )
}

export default Footer