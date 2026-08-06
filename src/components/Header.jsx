import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "./Link.jsx";
function Header({
  path
}) {
  const [open, setOpen] = useState(false);
  const nav = [["/como-funciona", "Cómo funciona"], ["/coches-importados", "Coches importados"], ["/sobre-nosotros", "Nosotros"], ["/blog", "Guía"]];
  return <header className="header">
      <Link to="/" className="brand">
        <span className="brand-mark">TCA</span>
        <span>
          Tu Coche
          <br />
          <b>Alemán</b>
        </span>
      </Link>
      <button className="menu-button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={"nav " + (open ? "open" : "")} aria-label="Navegación principal">
        {nav.map(([to, l]) => <Link key={to} to={to} onClick={() => setOpen(false)} className={path.startsWith(to) ? "active" : ""}>
            {l}
          </Link>)}
        <Link to="/presupuesto" onClick={() => setOpen(false)} className="button button-small">
          Pedir presupuesto <ArrowRight size={16} />
        </Link>
      </nav>
    </header>;
}
export default Header;
