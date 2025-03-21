import { describe, it, expect } from "@jest/globals";
import kontrolleraGissning from "./KontrolleraGissning.js";

//Definition av problem:
// Spelarens gissning ska kontrolleras mot det hemliga order.
// Om gissning är korrekt har spelaren vunnit.
// Om det är fel ord ger spelet feedback som indikerar huruvida några bokstäver i det gissade ordet finns med i det hemliga ordet,
//kontrollera om respektive bokstav finns på samma ställe i bägge arrayerna
//Om inte kontrollera om array inkluderar angiven bokstad (include)
//Annars ange att bokstav inte finns med
//Spelaren gissar sedan på nytt igen

describe("Kontroller om korrekt svar angetts", () => {
  it("Retunerar true om rätt svar att angetts", () => {
    const gissning = kontrolleraGissning("rätt", "rätt");

    expect(gissning).toBe(true);
  });

  it("Retunerar svar om respektive bokstad är correct, misplaced eller incorrect", () => {
    const gissning = kontrolleraGissning("cykla", "hallå");

    expect(gissning).toEqual([
      { svar: "Incorrect", bokstav: "h" },
      { svar: "Misplaced", bokstav: "a" },
      { svar: "Incorrect", bokstav: "l" },
      { svar: "Correct", bokstav: "l" },
      { svar: "Incorrect", bokstav: "å" },
    ]);
  });
  it("Retunerar korrekt svar även om samma bokstav förekommer fler gånger än en", () => {
    const gissning = kontrolleraGissning("ananas", "handla");

    expect(gissning).toEqual([
      { svar: "Incorrect", bokstav: "h" },
      { svar: "Misplaced", bokstav: "a" },
      { svar: "Misplaced", bokstav: "n" },
      { svar: "Incorrect", bokstav: "d" },
      { svar: "Incorrect", bokstav: "l" },
      { svar: "Misplaced", bokstav: "a" },
    ]);
  });
});
