import { ArrowRight, Check } from "lucide-react";
import Link from "./Link.jsx";
import Seo from "./Seo.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function ProjectDetail({
  item: p
}) {
  return <>
      <Seo title={p.title + " | Coches importados"} description={p.shortDescription} />
      <article className="detail">
        <div className="detail-hero">
          <p className="eyebrow">{p.category}</p>
          <h1>{p.title}</h1>
          <p>{p.client}</p>
        </div>
        <img className="detail-image" src={p.featuredImage} alt={p.title} />
        <div className="detail-body">
          <div>
            <p className="eyebrow">El encargo</p>
            <h2>Una compra definida por criterios, no por impulso.</h2>
          </div>
          <div>
            <p>{p.fullDescription}</p>
            <h3>Servicios incluidos</h3>
            <ul className="check-list">
              {p.services.map(s => <li key={s}>
                  <Check />
                  {s}
                </li>)}
            </ul>
            <Link to="/presupuesto" className="button">
              Quiero uno similar <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </article>
      <QuoteBanner />
    </>;
}
export default ProjectDetail;
