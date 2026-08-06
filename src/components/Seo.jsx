import { useEffect } from "react";
function Seo({
  title,
  description,
  type = "website"
}) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:type"]')?.setAttribute("content", type);
  }, [title, description, type]);
  return null;
}
export default Seo;
