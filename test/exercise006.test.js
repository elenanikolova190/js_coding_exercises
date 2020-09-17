const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");

  describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 20, 18, 1, 0, 7])).toBe(46);
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([4, 21, 654, 125, 65, 23, 40, 1])).toBe(905);
    });

    test("return 0 if no multiples of 3 or 5 are not present in the array", () => {
      expect(sumMultiples([1, 7, 8, 0, 4])).toBe(0);
    });
  });

  
  describe("isValidDNA", () => {
    test("return true if only the correct characters are found", () => {
      expect(isValidDNA("GCTAGTCACTATCGGTAC")).toBe(true);
    });
    test("return false if other characters are found", () => {
      expect(isValidDNA("GCTAGTCACTAUHGTSRTCGGTAC")).toBe(false);
      expect(isValidDNA("GCTAGHTCACTATC!GG@TAC")).toBe(false);
    });

    test("The search string should be case sensitive", () => {
      expect(isValidDNA("GCTAGTcgACTATCGGTAC")).toBe(false);
    });
  });
