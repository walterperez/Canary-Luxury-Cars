import { useEffect, useRef } from "react";
function Reveal({
  children,
  className = ""
}) {
  const r = useRef();
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && e.target.classList.add("visible"), {
      threshold: 0.1
    });
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return <div ref={r} className={"reveal " + className}>
      {children}
    </div>;
}
export default Reveal;
