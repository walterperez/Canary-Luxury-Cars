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
  const GITHUB_PAGES = loadEnvConfigKey("GITHUB_PAGES");
  console.log("DEBUG -> GITHUB_PAGES", GITHUB_PAGES);
  const base = GITHUB_PAGES ? "/Canary-Luxury-Cars/" : "";
  return base + localPath;
};
