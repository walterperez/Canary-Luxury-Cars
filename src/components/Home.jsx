import { ArrowRight } from "lucide-react";
import Link from "./Link.jsx";
import Seo from "./Seo.jsx";
import Reveal from "./Reveal.jsx";
import Steps from "./Steps.jsx";
import Saving from "./Saving.jsx";
import ProjectStrip from "./ProjectStrip.jsx";
import Trust from "./Trust.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function Home() {
  return <>
      <Seo title="Tu Coche Alemán | Coches de Alemania a España" description="Buscamos, verificamos e importamos tu coche alemán hasta tu domicilio en España." />
      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Compra inteligente · Gestión completa</p>
          <h1>
            Tu próximo coche alemán.
            <br />
            <em>Sin pagar de más.</em>
          </h1>
          <p>
            Lo buscamos, verificamos y traemos hasta tu puerta en España. Tú
            eliges el coche. Nosotros hacemos que llegue.
          </p>
          <div className="hero-actions">
            <Link to="/presupuesto" className="button">
              Solicitar presupuesto <ArrowRight size={18} />
            </Link>
            <Link to="/como-funciona" className="text-link light-link">
              Ver cómo funciona <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-proof">
          <span>
            <b>Hasta un 30%</b> de ahorro potencial*
          </span>
          <span>
            <b>De Alemania</b> a tu domicilio
          </span>
          <span>
            <b>Un solo equipo</b> en todo el proceso
          </span>
        </div>
      </section>
      <section className="intro section">
        <Reveal>
          <p className="eyebrow">Una forma mejor de comprar</p>
          <h2 className="display">
            Más coche.
            <br />
            <span>Mejor decisión.</span>
          </h2>
        </Reveal>
        <Reveal className="intro-copy">
          <p>
            El mercado alemán ofrece más variedad, mejores configuraciones y
            precios competitivos. Pero comprar a distancia exige criterio y
            control.
          </p>
          <p>
            Convertimos una operación compleja en un proceso claro, acompañado y
            seguro.
          </p>
          <Link to="/como-funciona" className="text-link">
            Conocer el servicio <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
      <Steps />
      <Saving />
      <ProjectStrip />
      <Trust />
      <QuoteBanner />
    </>;
}
export default Home;
