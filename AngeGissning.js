function angeGissning(gissatOrd, antal) {
  if (gissatOrd === "") {
    return false;
  }
  if (gissatOrd.length !== antal) {
    return false;
  }
  const gissat = gissatOrd.toLowerCase();

  return gissat;
}

export default angeGissning;
