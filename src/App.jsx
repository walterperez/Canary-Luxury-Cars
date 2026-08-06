import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx";
import PostDetail from "./components/PostDetail.jsx";
import FAQ from "./components/FAQ.jsx";
import Guarantees from "./components/Guarantees.jsx";
import Compare from "./components/Compare.jsx";
import Quote from "./components/Quote.jsx";
import Contact from "./components/Contact.jsx";
import Legal from "./components/Legal.jsx";
import Privacy from "./components/Privacy.jsx";
import Cookies from "./components/Cookies.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/projects";
import { posts } from "./data/posts";
function usePath() {
  const [p, setP] = useState(location.pathname.replace(/\/$/, "") || "/");
  useEffect(() => {
    const f = () => setP(location.pathname.replace(/\/$/, "") || "/");
    addEventListener("popstate", f);
    return () => removeEventListener("popstate", f);
  }, []);
  return p;
}
const routes = {
  "/": Home,
  "/como-funciona": Process,
  "/coches-importados": Projects,
  "/sobre-nosotros": About,
  "/blog": Blog,
  "/preguntas-frecuentes": FAQ,
  "/garantias": Guarantees,
  "/comparar-precios": Compare,
  "/presupuesto": Quote,
  "/contacto": Contact,
  "/aviso-legal": Legal,
  "/privacidad": Privacy,
  "/cookies": Cookies
};
export default function App() {
  const path = usePath();
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);
  let Page = routes[path],
    item;
  if (path.startsWith("/coches-importados/")) {
    Page = ProjectDetail;
    item = projects.find(x => x.slug === path.split("/").pop());
  }
  if (path.startsWith("/blog/")) {
    Page = PostDetail;
    item = posts.find(x => x.slug === path.split("/").pop());
  }
  if (!Page || (Page === ProjectDetail || Page === PostDetail) && !item) Page = NotFound;
  return <>
      <Header path={path} />
      <main id="contenido">
        <Page item={item} />
      </main>
      <Footer />
    </>;
}
