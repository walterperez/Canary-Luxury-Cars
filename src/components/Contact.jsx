import { siteConfig } from "../config";
import Seo from "./Seo.jsx";
import PageHero from "./PageHero.jsx";
import ContactForm from "./ContactForm.jsx";
function Contact() {
  return <>
      <Seo title="Contacto | Tu Coche Alemán" description="Contacta con el equipo de Tu Coche Alemán." />
      <PageHero eyebrow="Estamos al otro lado" title="¿Tienes una pregunta?" copy="Escríbenos. Si ya sabes qué coche buscas, pide presupuesto." />
      <section className="form-layout section">
        <div className="contact-data">
          <p>
            <small>Correo</small>
            {siteConfig.email}
          </p>
          <p>
            <small>Teléfono</small>
            {siteConfig.phone}
          </p>
        </div>
        <ContactForm />
      </section>
    </>;
}
export default Contact;
