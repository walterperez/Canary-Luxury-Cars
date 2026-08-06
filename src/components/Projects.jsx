import { projects } from "../data/projects";
import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
import ProjectCard from "./ProjectCard.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function Projects() {
  return <>
      <Seo title="Coches importados | Tu Coche Alemán" description="Vehículos gestionados e importados desde Alemania para clientes en España." />
      <PageHero eyebrow="Casos de importación" title="Cada coche empieza con una buena búsqueda." copy="Una selección que muestra cómo trabajamos. Los datos sensibles solo se publican con autorización." />
      <section className="section project-grid archive">
        {projects.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
      </section>
      <QuoteBanner />
    </>;
}
export default Projects;
