import { checkForName } from "../src/client/js/nameChecker";

describe("names includes user input", () => {
  test("Testing input text in the checkForName() function", () => {
    const names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];
    expect(names).toContain("Picard");
    expect(checkForName).toBeDefined();
  });
});
