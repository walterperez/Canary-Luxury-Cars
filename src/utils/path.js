export const isDevelopment = () => {
  return import.meta.env.DEV;
};

export const isProduction = () => {
  return import.meta.env.PROD;
};

export const loadEnvConfigKey = (key) => {
  return import.meta.env?.[key] || null;
};

export const getPath = (localPath) => {
  console.log("DEBUG -> getPath -> START!");

  const VITE_GITHUB_PAGES = loadEnvConfigKey("VITE_GITHUB_PAGES");
  const GITHUB_PAGES = loadEnvConfigKey("GITHUB_PAGES");
  const VITE_NODE_ENV = loadEnvConfigKey("VITE_NODE_ENV");
  const NODE_ENV = loadEnvConfigKey("NODE_ENV");

  console.log("DEBUG -> configs", {
    isProduction: isProduction(),
    isDevelopment: isDevelopment(),
    VITE_GITHUB_PAGES,
    GITHUB_PAGES,
    VITE_NODE_ENV,
    NODE_ENV,
    "import.meta.env": import.meta.env,
  });

  const base = VITE_GITHUB_PAGES ? "/Canary-Luxury-Cars/" : "";

  console.log("DEBUG -> base", base);

  return base + localPath;
};
