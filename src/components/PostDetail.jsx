import Seo from "./Seo.jsx";
import QuoteBanner from "./QuoteBanner.jsx";
function PostDetail({
  item: p
}) {
  return <>
      <Seo title={p.seoTitle} description={p.metaDescription} type="article" />
      <article className="article">
        <header>
          <p className="eyebrow">{p.categories.join(" · ")}</p>
          <h1>{p.title}</h1>
          <p className="lead">{p.excerpt}</p>
          <small>
            {p.author} · {new Date(p.publishDate).toLocaleDateString("es-ES")}
          </small>
        </header>
        <img src={p.featuredImage} alt="" />
        <div className="prose" dangerouslySetInnerHTML={{
        __html: p.fullArticle
      }} />
      </article>
      <QuoteBanner />
    </>;
}
export default PostDetail;
