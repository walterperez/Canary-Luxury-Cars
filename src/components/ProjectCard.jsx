import { ArrowRight } from "lucide-react";
import Link from "./Link.jsx";
import Reveal from "./Reveal.jsx";
import { getPath } from "../utils/path.js";

function ProjectCard({ p, index }) {
  return (
    <Reveal className={"project-card p" + index}>
      <Link to={"/coches-importados/" + p.slug}>
        <div className="project-image">
          <img src={getPath(p.featuredImage)} alt={p.title} loading="lazy" />
          <span>{p.category}</span>
        </div>
        <div className="project-info">
          <div>
            <h3>{p.title}</h3>
            <p>{p.shortDescription}</p>
          </div>
          <ArrowRight />
        </div>
      </Link>
    </Reveal>
  );
}
export default ProjectCard;
