import { describe, it, expect } from "@jest/globals";
import hemligtOrd from "./OrdAttGissa.js";

//Definition av problem:
//Spelare ska kunna välja hur många bokstäver ordet ska innehålla
//Spelare ska kunna välja om samma bokstav för förekomma mer än en gång
//Lista med ord ska sorteras utifrån angivna parametrar och sedan slumpiv väljas
//Om inget ord uppfyller kriterierna ska spelaren noteras om detta

describe("Visa ord att gissa", () => {
  it("Kontrollera att sorterar ord på längd", () => {
    const ord = [
      "ja",
      "nej",
      "också",
      "kanske",
      "bra",
      "även",
      "lite",
      "alla",
      "kommer",
      "titta",
    ];

    const svar = hemligtOrd(ord, 4, false);

    expect(svar).toHaveLength(4);
  });
  it("Kontrollera att sorterat bort ord med återkommande bokstav", () => {
    const ord = ["alla", "anna"];

    const svar = hemligtOrd(ord, 4, false);

    expect(svar).toBe(false);
  });
  it("Kontrollera att omvandlar till gemener", () => {
    const ord = ["BoRt"];

    const svar = hemligtOrd(ord, 4, false);

    expect(svar).toEqual("bort");
  });
});
