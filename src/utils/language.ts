export const getLanguageFromPath = (pathname:string) => {
  return pathname.startsWith('/kr') ? 'kr' : 'uz';
};

export const getAcceptLanguage = (lang:string) => {
  return lang === 'kr' ? 'uz' : 'uz'; 
};