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
  const VITE_GITHUB_PAGES = loadEnvConfigKey("VITE_GITHUB_PAGES");
  const base = VITE_GITHUB_PAGES ? "/Canary-Luxury-Cars/" : "";
  return base + localPath;
};
