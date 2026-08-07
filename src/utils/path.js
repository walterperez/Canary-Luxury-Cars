export const isDevelopment = () => {
  return import.meta.env.DEV;
};

export const isProduction = () => {
  return import.meta.env.PROD;
};

export const loadEnvConfig = () => {
  if (isDevelopment()) {
    return isDevelopment();
  }
  if (isProduction()) {
    return isProduction();
  }
  return null;
};

export const loadEnvConfigKey = (key) => {
  if (loadEnvConfig()) {
    console.log("DEBUG -> loadEnvConfig", loadEnvConfig());
    return loadEnvConfig()[key];
  }
  return null;
};

export const getPath = (localPath) => {
  const GITHUB_PAGES = loadEnvConfigKey("GITHUB_PAGES");
  console.log("DEBUG -> GITHUB_PAGES", GITHUB_PAGES);
  const base = GITHUB_PAGES ? "/Canary-Luxury-Cars/" : "";
  return base + localPath;
};
