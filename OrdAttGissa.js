function hemligtOrd(ord, antal, upprepning) {
  const listaOrd = ord;
  const valtAntal = antal;
  const dubletter = upprepning;

  //Sortera utifrån längd på ord

  const sortedList = listaOrd.filter((ord) => {
    if (ord.length == valtAntal) {
      return ord;
    }
  });

  //Kontrollera om samma bokstav får finnas flera gånger

  const remove = [];

  if (dubletter == false) {
    for (let i = 0; i < sortedList.length; i++) {
      let tring = sortedList[i];

      let kolla = /(\w).*\1/.test(tring);

      if (kolla == true) {
        remove.push(tring);
      }
    }
  }

  //Om list tom meddela att välja på nytt
  //Slumpa ett ord

  if (remove.length > 0) {
    const newLista = sortedList.filter((ord) => !remove.includes(ord));

    if (newLista == 0) {
      return false;
    } else {
      const randomWord = newLista[Math.floor(Math.random() * newLista.length)];

      return randomWord.toLowerCase();
    }
  } else {
    if (sortedList == 0) {
      return false;
    } else {
      const randomWordSecond =
        sortedList[Math.floor(Math.random() * sortedList.length)];

      return randomWordSecond.toLowerCase();
    }
  }
}

export default hemligtOrd;
