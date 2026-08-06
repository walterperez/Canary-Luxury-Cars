import Seo from "./Seo.jsx";
function LegalPage({
  type
}) {
  const m = {
    legal: ["Aviso legal", "Pendiente de completar con denominación social, NIF, domicilio y datos registrales del titular."],
    privacy: ["Política de privacidad", "Los datos se utilizarán para responder a la consulta o preparar el presupuesto solicitado."],
    cookies: ["Política de cookies", "La versión inicial no instala cookies publicitarias ni de analítica."]
  };
  const [t, c] = m[type];
  return <>
      <Seo title={t + " | Tu Coche Alemán"} description={t} />
      <article className="legal">
        <p className="eyebrow">Información legal</p>
        <h1>{t}</h1>
        <p>{c}</p>
        <h2>Información pendiente de validación</h2>
        <p>
          Esta base debe completarse con los datos reales y revisarse conforme a
          la actividad y herramientas definitivas.
        </p>
      </article>
    </>;
}
export default LegalPage;
