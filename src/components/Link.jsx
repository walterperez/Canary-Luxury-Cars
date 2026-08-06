function Link({
  to,
  children,
  className = "",
  onClick
}) {
  return <a href={to} className={className} onClick={e => {
    if (!e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      history.pushState({}, "", to);
      dispatchEvent(new PopStateEvent("popstate"));
      scrollTo({
        top: 0,
        behavior: "instant"
      });
      onClick?.();
    }
  }}>
      {children}
    </a>;
}
export default Link;
