import { siteConfig } from "../config";
import Link from "./Link.jsx";
function Footer() {
  return <footer>
      <div className="footer-top">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">TCA</span>
            <span>
              Tu Coche
              <br />
              <b>Alemán</b>
            </span>
          </div>
          <p>Importar bien es comprar mejor.</p>
        </div>
        <div>
          <b>Explora</b>
          <Link to="/como-funciona">Cómo funciona</Link>
          <Link to="/coches-importados">Coches importados</Link>
          <Link to="/blog">Guía</Link>
          <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
          <Link to="/garantias">Seguridad y garantías</Link>
          <Link to="/comparar-precios">Comparar precios</Link>
        </div>
        <div>
          <b>Contacto</b>
          <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
          <a href={"tel:" + siteConfig.phone.replace(/\s/g, "")}>
            {siteConfig.phone}
          </a>
          <Link to="/contacto">Contacto</Link>
          <Link to="/presupuesto">Pedir presupuesto</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tu Coche Alemán</span>
        <div>
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>;
}
export default Footer;
