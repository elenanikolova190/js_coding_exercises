const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");

  describe("sumDigits", () => {
    test("return the sum of the digits of an integer", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(5551228)).toBe(28);
      expect(sumDigits(0)).toBe(0);
    });
  });

  describe("createRange", () => {
    test("return an array of numbers in the range with predefined step", () => {
      expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
      expect(createRange(2, 8, 2)).toEqual([2, 4, 6, 8]);
    });

    test("return [0] when the range is 0", () => {
        expect(createRange(0, 0, 0)).toEqual([0]);
    });
  });

  describe("getScreentimeAlertList", () => {
    test("return an array of usernames who have used internet for more than 100min in a day", () => {
        let users =  [
            {
              username: "beth_1234",
              name: "Beth Smith",
              screenTime: [
                           { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                           { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                           { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                           { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                           { date: "2019-06-14", usage: { mapMyRun: 85, whatsApp: 0, facebook: 0, safari: 31} },
                          ]
             },
             {
              username: "sam_j_1989",
              name: "Sam Jones",
              screenTime: [
                           { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                           { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                           { date: "2019-06-14", usage: { mapMyRun: 90, whatsApp: 0, facebook: 0, safari: 31} },
                          ]
             },
           ];
      expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(['beth_1234', 'sam_j_1989']);
      expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(['beth_1234']);
      expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([]);
    });
  });

  describe("hexToRGB", () => {
    test("converts hexadecimal colour values to RGB", () => {
      expect(hexToRGB('#FF1133')).toBe("rgb(255,17,51)");
      expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
      expect(hexToRGB("#FF00FF")).toBe("rgb(255,0,255)");
    });
  });

  describe("findWinner", () => {
    test("finds winner of a tic-tac-toe game board", () => {
      expect(findWinner([
        ["X", "0", "X"],
        ["X", "0", "0"],
        ["X", null, "0"]])).toBe("X");
      expect(findWinner([
        ["X", "0", "X"],
        ["0", "0", "0"],
        ["X", null, "0"]
        ])).toBe("0");
      expect(findWinner([
        ["X", "0", "X"],
        ["0", null, "0"],
        ["X", null, "0"]
      ])).toBe(null);
    });
  });
  


  

