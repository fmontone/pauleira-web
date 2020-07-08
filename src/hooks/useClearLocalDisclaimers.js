export default function useClearLocalDisclaimer(actualName) {
  const totalDisclaimers = Object.keys(localStorage);
  const oldDisclaimer = totalDisclaimers.filter(item => item !== actualName);

  if (oldDisclaimer) oldDisclaimer.map(item => localStorage.removeItem(item));
}
