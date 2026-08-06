import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
import Trust from "./Trust.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function About() {
  return <>
      <Seo title="Sobre Tu Coche Alemán" description="Conoce nuestra forma de entender la importación de vehículos desde Alemania." />
      <PageHero eyebrow="Quién está detrás" title="Tu interés primero. El coche, después." copy="Hacemos que comprar en Alemania pase de salto al vacío a decisión informada." />
      <section className="editorial section">
        <div>
          <p className="eyebrow">Nuestra forma de trabajar</p>
          <h2>
            La confianza no se declara.
            <br />
            Se demuestra.
          </h2>
        </div>
        <div>
          <p>
            Una importación reúne decisiones económicas, técnicas y logísticas.
            Nuestro trabajo es ordenarlas, explicarlas y acompañarte.
          </p>
          <p>
            No buscamos convencerte de cualquier coche. Buscamos que decidas con
            información y expectativas realistas.
          </p>
        </div>
      </section>
      <Trust />
      <QuoteBanner />
    </>;
}
export default About;
