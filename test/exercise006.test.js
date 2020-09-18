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

  describe("getComplementaryDNA", () => {
    test("return a string of complementary DNA", () => {
      expect(getComplementaryDNA("ACTG")).toBe("TGAC");
      expect(getComplementaryDNA("ACTGTGACCTGA")).toBe("TGACACTGGACT");
    });
  });

  describe("isItPrime", () => {
    test("returns true if the number is prime", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(1217)).toBe(true);
        expect(isItPrime(2207)).toBe(true);
    });

    test("returns false if the number is NOT prime", () => {
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(15)).toBe(false);
        expect(isItPrime(1218)).toBe(false);
        expect(isItPrime(2205)).toBe(false);
        expect(isItPrime(2275)).toBe(false);
    });
  });

  describe("createMatrix", () => {
    test("returns a n-dimentional arrays of ints", () => {
        let arr1 = [[11, 11], [11, 11]];
        let arr2 = [
            [12, 12, 12, 12, 12],
            [12, 12, 12, 12, 12],
            [12, 12, 12, 12, 12],
            [12, 12, 12, 12, 12],
            [12, 12, 12, 12, 12]
        ];
        expect(createMatrix(2, 11)).toEqual(arr1);
        expect(createMatrix(5, 12)).toEqual(arr2);
    });

    test("returns a n-dimentional arrays of strings", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo']
        ]);
    });

    test("returns a one dimentional arrays or [] if 1 or 0 are specified for array size", () => {
        expect(createMatrix(1, 1)).toEqual([1]);
        expect(createMatrix(1, "fill")).toEqual(["fill"]);
        expect(createMatrix(0, "gap")).toEqual([]);
    });

  });

  describe("areWeCovered", () => {
    test("returns true if there are at least three people on the day ", () => {
        let input = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sandra", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Tara", rota: ["Monday", "Sunday", "Friday", "Wednesday"] },
            { name: "Sanae", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }];

        expect(areWeCovered(input, "Tuesday")).toEqual(true);
        expect(areWeCovered(input, "Wednesday")).toEqual(true);
        expect(areWeCovered(input, "Sunday")).toEqual(true);
    });

    test("returns false if there are less than three people on the day ", () => {
        let input = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sandra", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Tara", rota: ["Monday", "Sunday", "Friday", "Wednesday"] },
            { name: "Sanae", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }];
        expect(areWeCovered(input, "Monday")).toEqual(false);
        expect(areWeCovered(input, "Friday")).toEqual(false);
    });
    test("day checked is not case sensitive", () => {
        let input = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sandra", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Tara", rota: ["Monday", "Sunday", "Friday", "Wednesday"] },
            { name: "Sanae", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }];
        expect(areWeCovered(input, "tuesday")).toEqual(true);
        expect(areWeCovered(input, "monDay")).toEqual(false);
        expect(areWeCovered(input, "sunday")).toEqual(true);
    });

  });
        

