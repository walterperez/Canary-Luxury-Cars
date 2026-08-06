import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import Link from "./Link.jsx";
import ProjectCard from "./ProjectCard.jsx";
function ProjectStrip() {
  return <section className="section projects-section">
      <div className="section-head light-head">
        <div>
          <p className="eyebrow">Selección reciente</p>
          <h2>
            Coches con una historia
            <br />
            bien comprobada.
          </h2>
        </div>
        <Link to="/coches-importados" className="text-link">
          Ver todos <ArrowRight size={16} />
        </Link>
      </div>
      <div className="project-grid">
        {projects.map((p, i) => <ProjectCard p={p} key={p.slug} index={i} />)}
      </div>
    </section>;
}
export default ProjectStrip;
