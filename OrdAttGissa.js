hemligtOrd(lista, antal, upprepning);

function hemligtOrd(ord, antal, upprepning) {
  const listaOrd = ord;
  const antalBokstäver = antal;
  const dubblaBokstäver = upprepning;

  //Sortera utifrån längd på ord

  const sortedList = listaOrd.filter((ord) => {
    if (ord.length == antalBokstäver) {
      return ord;
    }
  });

  //Kontrollera om samma boksav får finnas flera gånger
  const svara = [];

  if (dubblaBokstäver == false) {
    for (let i = 0; i < sortedList.length; i++) {
      let tring = sortedList[i];

      let kolla = /(\w).*\1/.test(tring);

      if (kolla == true) {
        svara.push(tring);
      }
    }
  }

  //Om list tom meddela att välja på nytt

  //Slumpa ett ord

  //Säkerställ

  return svara;
}

export default hemligtOrd;
