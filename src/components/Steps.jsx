import { ArrowRight, BadgeCheck, Search, ShieldCheck, Truck } from "lucide-react";
import Link from "./Link.jsx";
import Reveal from "./Reveal.jsx";
function Steps() {
  const a = [[Search, "01", "Cuéntanos qué buscas", "Modelo, presupuesto, equipamiento y prioridades."], [BadgeCheck, "02", "Encontramos la unidad", "Analizamos el mercado y filtramos las mejores opciones."], [ShieldCheck, "03", "Verificamos antes de comprar", "Historial, documentación y estado: decidimos con datos."], [Truck, "04", "La llevamos hasta ti", "Coordinamos compra, logística y entrega en España."]];
  return <section className="dark-section section">
      <div className="section-head">
        <div>
          <p className="eyebrow light">De la búsqueda a tu garaje</p>
          <h2>Todo bajo control.</h2>
        </div>
        <p>
          Un proceso diseñado para que siempre sepas qué ocurre y qué viene
          después.
        </p>
      </div>
      <div className="steps">
        {a.map(([I, n, t, d]) => <Reveal className="step" key={n}>
            <span>{n}</span>
            <I />
            <h3>{t}</h3>
            <p>{d}</p>
          </Reveal>)}
      </div>
      <Link to="/presupuesto" className="button button-white">
        Empezar mi búsqueda <ArrowRight size={18} />
      </Link>
    </section>;
}
export default Steps;
