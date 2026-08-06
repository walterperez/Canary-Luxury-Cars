import { ArrowRight } from "lucide-react";
import Link from "./Link.jsx";
import Reveal from "./Reveal.jsx";
function ProjectCard({
  p,
  index
}) {
  return <Reveal className={"project-card p" + index}>
      <Link to={"/coches-importados/" + p.slug}>
        <div className="project-image">
          <img src={p.featuredImage} alt={p.title} loading="lazy" />
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
    </Reveal>;
}
export default ProjectCard;
