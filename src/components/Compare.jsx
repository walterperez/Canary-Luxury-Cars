import { ArrowRight } from "lucide-react";
import Link from "./Link.jsx";
import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
function Compare() {
  return <>
      <Seo title="Comparar precios en Alemania y España" description="Cómo comparar el coste de un coche importado con una unidad equivalente." />
      <PageHero eyebrow="Ahorro con contexto" title="Comparar precios no basta. Hay que comparar coches." copy="Equipamiento, historial, kilometraje y coste final permiten saber si compensa." />
      <section className="comparison section">
        <div className="comparison-card muted">
          <span>Mercado en España</span>
          <h2>Unidad equivalente</h2>
          <ul>
            <li>Precio de venta</li>
            <li>Equipamiento comparable</li>
            <li>Estado y kilometraje</li>
          </ul>
        </div>
        <div className="versus">VS</div>
        <div className="comparison-card">
          <span>Mercado alemán</span>
          <h2>Coste puesto en España</h2>
          <ul>
            <li>Precio del vehículo</li>
            <li>Verificación y gestión</li>
            <li>Transporte y trámites</li>
          </ul>
        </div>
      </section>
      <section className="center-copy">
        <p>
          *El ahorro es orientativo y no está garantizado. Calcularemos cada
          caso con datos actuales.
        </p>
        <Link to="/presupuesto" className="button">
          Calcular mi oportunidad <ArrowRight size={18} />
        </Link>
      </section>
    </>;
}
export default Compare;
