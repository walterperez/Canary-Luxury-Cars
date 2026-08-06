import { useState } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { siteConfig } from "../config";
import Link from "./Link.jsx";
function ContactForm({
  quote = false
}) {
  const [state, setState] = useState("idle"),
    [error, setError] = useState("");
  async function submit(e) {
    e.preventDefault();
    setState("loading");
    setError("");
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch(siteConfig.formEndpoint || "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          type: quote ? "presupuesto" : "contacto"
        })
      });
      if (!res.ok) throw Error();
      setState("success");
      e.currentTarget.reset();
    } catch {
      setState("error");
      setError("No hemos podido enviarlo. Escríbenos a " + siteConfig.email);
    }
  }
  if (state === "success") return <div className="form-success" role="status">
        <BadgeCheck />
        <h2>Solicitud recibida</h2>
        <p>Gracias. Nos pondremos en contacto contigo.</p>
      </div>;
  return <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          Nombre y apellidos
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Teléfono
          <input name="phone" required type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        Correo electrónico
        <input name="email" required type="email" autoComplete="email" />
      </label>
      {quote && <div className="field-row">
          <label>
            Marca y modelo
            <input name="car" required placeholder="Ej. BMW X3" />
          </label>
          <label>
            Presupuesto
            <select name="budget" required defaultValue="">
              <option value="" disabled>
                Selecciona
              </option>
              <option>Hasta 30.000 €</option>
              <option>30.000–50.000 €</option>
              <option>50.000–80.000 €</option>
              <option>Más de 80.000 €</option>
            </select>
          </label>
        </div>}
      <label>
        {quote ? "Cuéntanos qué buscas" : "¿Cómo podemos ayudarte?"}
        <textarea name="message" required rows="5" />
      </label>
      <label className="honeypot" aria-hidden="true">
        Empresa
        <input name="company" tabIndex="-1" autoComplete="off" />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          Acepto la <Link to="/privacidad">política de privacidad</Link>.
        </span>
      </label>
      <button className="button" disabled={state === "loading"}>
        {state === "loading" ? "Enviando…" : quote ? "Solicitar presupuesto" : "Enviar consulta"}{" "}
        <ArrowRight size={18} />
      </button>
      {error && <p className="form-error" role="alert">
          {error}
        </p>}
    </form>;
}
export default ContactForm;
