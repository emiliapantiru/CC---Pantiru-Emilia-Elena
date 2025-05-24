export const quotesByWeather: Record<string, string[]> = {
  sunny: [
    "Astăzi e o zi perfectă pentru a străluci!",
    "Profită de soare și visează departe.",
    "Soarele îți luminează calea spre reușită.",
    "Zâmbește, e soare și totul e posibil!",
    "Lasă lumina să-ți inspire pașii.",
    "Fiecare rază de soare e o nouă speranță.",
    "Soarele strălucește pentru cei curajoși.",
    "Este o zi excelentă pentru a începe ceva nou.",
    "Ieși în lume și lasă-ți amprenta pozitivă.",
    "Fii tu motivul pentru care lumea strălucește azi.",
  ],
  rain: [
    "Fiecare ploaie aduce o nouă creștere.",
    "Chiar și în ploaie, poți străluci.",
    "Ploaia spală trecutul și deschide viitorul.",
    "Lasă ploaia să-ți reînnoiască sufletul.",
    "După ploaie, întotdeauna vine curcubeul.",
    "Ploaia nu oprește visele, le hrănește.",
    "Timpul ploios e perfect pentru reflecție.",
    "Creează, iubește, visează – chiar și pe ploaie.",
    "Învață să dansezi în ploaie, nu doar să aștepți să treacă.",
    "Picătură cu picătură, și tu crești.",
  ],
  cloudy: [
    "Chiar și cerul înnorat are farmecul lui.",
    "Dincolo de nori, soarele te așteaptă.",
    "Nimic nu e permanent, nici măcar norii.",
    "Calmul vine adesea cu cerul gri.",
    "Fii lumina printre nori.",
    "Norii adaugă profunzime vieții.",
    "Sub cerul acoperit, ideile înfloresc.",
    "Chiar și norii poartă speranțe ascunse.",
    "În liniștea norilor se naște claritatea.",
    "Oricât de întunecat e cerul, tu poți fi lumina.",
  ],
  default: [
    "Fiecare zi este o nouă oportunitate.",
    "Tu decizi cât de frumoasă va fi ziua ta.",
    "Alege să vezi binele, chiar și când nu e vizibil.",
    "Un pas mic azi, un salt uriaș mâine.",
    "Curajul începe cu un gând pozitiv.",
    "Schimbarea începe cu tine.",
    "Ai încredere în proces. Ai încredere în tine.",
    "Creează momentul, nu aștepta momentul perfect.",
    "O zi obișnuită poate deveni extraordinară.",
    "Viața e despre progres, nu perfecțiune.",
  ],
};

export function getQuoteForWeather(type: string): string {
  const list = quotesByWeather[type] || quotesByWeather.default;
  return list[Math.floor(Math.random() * list.length)];
}
