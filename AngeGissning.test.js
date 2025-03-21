import { describe, it, expect } from "@jest/globals";
import angeGissning from "./AngeGissning.js";

//Definition av problem:
// Spelaren ska gissa vilket ord det är genom att mata in ett ord med korrrekt antal valda bokstäver.

describe("Kontroller angett svar", () => {
  it("Returnerar falskt om ingen gissning angetts", () => {
    const gissning = angeGissning("");
    expect(gissning).toBe(false);
  });

  it("Retunerar falskt om fel längd på angett ord", () => {
    const gemener = angeGissning("bra", 4);
    expect(gemener).toBe(false);
  });

  it("Retunerar ord i gemener", () => {
    const gemener = angeGissning("HeJ", 3);
    expect(gemener).toEqual("hej");
  });
});
