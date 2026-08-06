import { ArrowRight } from "lucide-react";
import Link from "./Link.jsx";
function QuoteBanner() {
  return <section className="quote-banner">
      <p className="eyebrow light">Tu búsqueda empieza aquí</p>
      <h2>¿Qué coche tienes en mente?</h2>
      <p>
        Cuéntanoslo. Te responderemos con una primera valoración sin compromiso.
      </p>
      <Link to="/presupuesto" className="button button-white">
        Solicitar mi presupuesto <ArrowRight size={18} />
      </Link>
    </section>;
}
export default QuoteBanner;
