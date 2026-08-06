import Link from "./Link.jsx";
function NotFound() {
  return <section className="not-found">
      <p className="eyebrow">Error 404</p>
      <h1>Esta carretera no lleva a ninguna parte.</h1>
      <Link to="/" className="button">
        Volver al inicio
      </Link>
    </section>;
}
export default NotFound;
