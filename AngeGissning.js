function angeGissning(gissatOrd, längd) {
  if (gissatOrd === "") {
    return false;
  }
  if (gissatOrd.length !== längd) {
    return false;
  }
  const gissat = gissatOrd.toLowerCase();

  return gissat;
}

export default angeGissning;
