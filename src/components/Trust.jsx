import { CarFront, BadgeEuro, Clock3, FileCheck2 } from "lucide-react";
function Trust() {
  const a = [[FileCheck2, "Documentación revisada", "Comprobamos la información disponible antes de avanzar."], [CarFront, "La unidad adecuada", "No dependemos del stock de un único vendedor."], [BadgeEuro, "Costes explicados", "Conoces la estimación antes de comprometerte."], [Clock3, "Seguimiento continuo", "Te acompañamos desde el encargo hasta la entrega."]];
  return <section className="trust section">
      <p className="eyebrow">Confianza basada en hechos</p>
      <div className="trust-grid">
        {a.map(([I, t, d]) => <div key={t}>
            <I />
            <h3>{t}</h3>
            <p>{d}</p>
          </div>)}
      </div>
    </section>;
}
export default Trust;
