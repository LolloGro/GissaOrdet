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
      checkAnswer.push({ svar: "Misplaced", bokstav: gissning[i] }); //iterera över bokstäver för att se om den förekommer fler än en gång? Kontrollera om finns fler och om första förekomsten
    } else {
      checkAnswer.push({ svar: "Incorrect", bokstav: gissning[i] });
    }
  }

  return checkAnswer;
}

export default kontrolleraGissning;
