import { ArrowRight } from "lucide-react";
import { posts } from "../data/posts";
import Link from "./Link.jsx";
import Seo from "./Seo.jsx";
import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import { getPath } from "../utils/path.js";

function Blog() {
  return (
    <>
      <Seo
        title="Guía para importar coches de Alemania"
        description="Guías sobre costes, documentación y compra de coches alemanes."
      />
      <PageHero
        eyebrow="Ideas para decidir mejor"
        title="La guía de la compra inteligente."
        copy="Respuestas claras a las preguntas que aparecen antes de importar un coche."
      />
      <section className="section post-grid">
        {posts.map((p) => (
          <Reveal className="post-card" key={p.slug}>
            <Link to={"/blog/" + p.slug}>
              <img src={getPath(p.featuredImage)} alt="" loading="lazy" />
              <p className="eyebrow">
                {p.categories[0]} ·{" "}
                {new Date(p.publishDate).toLocaleDateString("es-ES")}
              </p>
              <h2>{p.title}</h2>
              <p>{p.excerpt}</p>
              <span className="text-link">
                Leer guía <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
export default Blog;
