import { ChevronDown } from "lucide-react";
import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function FAQ() {
  return <>
      <Seo title="Preguntas frecuentes | Tu Coche Alemán" description="Dudas habituales sobre la compra e importación de coches desde Alemania." />
      <PageHero eyebrow="Sin letra pequeña" title="Preguntas claras. Respuestas claras." copy="Todo lo que conviene saber antes de comenzar." />
      <section className="faq section">
        {faq.map(([q, a]) => <details key={q}>
            <summary>
              {q}
              <ChevronDown />
            </summary>
            <p>{a}</p>
          </details>)}
      </section>
      <QuoteBanner />
    </>;
}
export default FAQ;
