import Seo from "./Seo.jsx";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function Process() {
  const a = [["01", "Definimos el encargo", "Modelo, presupuesto y tus imprescindibles."], ["02", "Exploramos Alemania", "Localizamos unidades y descartamos las que no encajan."], ["03", "Presentamos opciones", "Recibes una selección explicada y sus costes estimados."], ["04", "Verificamos la unidad", "Revisamos historial, documentación y estado."], ["05", "Gestionamos la operación", "Compra, documentación, transporte y trámites."], ["06", "Entregamos en España", "Recibes tu coche con la documentación correspondiente."]];
  return <>
      <Seo title="Cómo funciona | Tu Coche Alemán" description="Conoce cómo buscamos, verificamos e importamos tu coche desde Alemania." />
      <PageHero eyebrow="Un proceso claro" title="Alemania está más cerca de lo que parece." copy="Un único equipo coordina toda la operación y te mantiene informado." />
      <section className="timeline section">
        {a.map(([n, t, d]) => <Reveal className="timeline-item" key={n}>
            <span>{n}</span>
            <h2>{t}</h2>
            <p>{d}</p>
          </Reveal>)}
      </section>
      <QuoteBanner />
    </>;
}
export default Process;
