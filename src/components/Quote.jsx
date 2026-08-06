import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
import ContactForm from "./ContactForm.jsx";
function Quote() {
  return <>
      <Seo title="Pedir presupuesto | Tu Coche Alemán" description="Cuéntanos qué coche alemán buscas y recibe una valoración." />
      <PageHero eyebrow="Sin compromiso" title="Hablemos de tu próximo coche." copy="Cuanto mejor entendamos tu búsqueda, más precisa será nuestra valoración." />
      <section className="form-layout section">
        <div>
          <p className="eyebrow">Qué ocurre después</p>
          <ol className="side-steps">
            <li>
              <span>1</span>Revisamos tu solicitud.
            </li>
            <li>
              <span>2</span>Te llamamos para afinar criterios.
            </li>
            <li>
              <span>3</span>Valoramos la viabilidad.
            </li>
          </ol>
        </div>
        <ContactForm quote />
      </section>
    </>;
}
export default Quote;
