import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
import Trust from "./Trust.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function Guarantees() {
  return <>
      <Seo title="Seguridad y garantías | Tu Coche Alemán" description="Comprobaciones y transparencia en el proceso de importación." />
      <PageHero eyebrow="Compra acompañada" title="La tranquilidad también forma parte del coche." copy="Reducimos la incertidumbre con criterios, verificaciones y comunicación." />
      <Trust />
      <section className="editorial section">
        <div>
          <p className="eyebrow">Importante</p>
          <h2>El alcance se define antes de comprar.</h2>
        </div>
        <div>
          <p>
            Cada unidad y operación puede tener condiciones distintas. La
            documentación contractual detallará comprobaciones,
            responsabilidades y garantías aplicables.
          </p>
          <p>No publicamos garantías universales que puedan inducir a error.</p>
        </div>
      </section>
      <QuoteBanner />
    </>;
}
export default Guarantees;
