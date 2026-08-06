import { ArrowRight } from "lucide-react";
import Link from "./Link.jsx";
import Reveal from "./Reveal.jsx";
function Saving() {
  return (
    <section className="saving section">
      <Reveal className="saving-visual">
        <div>
          <div className="flex">
            <span className="ghost-number">30</span>
            <span className="percent">%</span>
          </div>
          <div
            style={{
              paddingLeft: "2rem",
              paddingTop: "2rem",
            }}
          >
            Ahorro potencial medio frente a una unidad equivalente*
          </div>
        </div>
      </Reveal>
      <Reveal className="saving-copy">
        <p className="eyebrow">El precio correcto es el precio completo</p>
        <h2>
          No vendemos promesas.
          <br />
          Comparamos oportunidades.
        </h2>
        <p>
          Contrastamos el coste estimado puesto en España con alternativas
          equivalentes. El ahorro real depende del modelo, la unidad y el
          momento.
        </p>
        <Link to="/comparar-precios" className="text-link">
          Cómo calculamos el ahorro <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
export default Saving;
