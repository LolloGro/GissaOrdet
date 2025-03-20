function kontrolleraGissning(hemligt, gissat) {
  if (hemligt === gissat) {
    return true;
  }

  const svar = hemligt.split("");
  const gissning = gissat.split("");

  const checkAnswer = [];

  for (let i = 0; i < hemligt.length; i++) {
    if (svar[i] == gissning[i]) {
      checkAnswer.push({ svar: "Correct", bokstav: gissning[i] });
    } else if (svar.includes(gissning[i])) {
      const kolla = gissning.filter((b) => b == gissning[i]);

      if (kolla.length > 1) {
        checkAnswer.push({ svar: "Incorrect", bokstav: gissning[i] });
      } else {
        checkAnswer.push({ svar: "Misplaced", bokstav: gissning[i] });
      }
    } else {
      checkAnswer.push({ svar: "Incorrect", bokstav: gissning[i] });
    }
  }

  return checkAnswer;
}

export default kontrolleraGissning;
