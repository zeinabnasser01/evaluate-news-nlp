import { checkForUrl } from "../src/client/js/urlChecker";

describe("test url checker function", () => {
  test("Testing url checker function defined in the", () => {
    expect(checkForUrl).toBeDefined();
  });
  test("Testing url checker function return valid url", () => {
    expect(checkForUrl).toEqual(true);
  });
  test("Testing url checker function return not valid url", () => {
    expect(checkForUrl).toEqual(false);
  });
});
