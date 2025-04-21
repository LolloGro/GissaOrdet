function kontrolleraGissning(hemligt, gissat) {
  if (hemligt === gissat) {
    return true;
  }

  const svar = hemligt.split("");
  const gissning = gissat.split("");

  const checkIndex = [];

  const result = gissning.map((letter, index) => {
    if (letter === svar[index]) {
      const i = svar.indexOf(letter);
      checkIndex.push(i);
      return { letter: letter, secret: "Correct" };
    } else {
      return { letter: letter, secret: "Incorrect" };
    }
  });

  const feedback = result.map((res) => {
    if (svar.includes(res.letter)) {
      const j = svar.indexOf(res.letter);
      if (checkIndex.includes(j)) {
        return res;
      } else {
        checkIndex.push(j);
        return { letter: res.letter, secret: "Misplaced" };
      }
    } else {
      return res;
    }
  });

  return feedback;
}

export default kontrolleraGissning;
