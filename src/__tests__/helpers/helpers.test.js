import { sortTypes } from "../../constants/constants";
import {
  getMaxId,
  sortObjArrayByDate,
  sortObjArrayByText,
  strCompare,
  transformDateToStr,
  transformStrToDate,
  validatePhone,
} from "../../helpers/helpers";

describe("helpers", () => {
  describe("Func getMaxId", () => {
    it("Ascending position", () => {
      const input = [
        { id: 1, name: "Andrew" },
        { id: 3, name: "Andrew2" },
        { id: 5, name: "Andrew3" },
      ];
      expect(getMaxId(input)).toBe(5);
    });

    it("Random position", () => {
      const input = [
        { id: 1, name: "Andrew" },
        { id: 5, name: "Andrew3" },
        { id: 3, name: "Andrew2" },
      ];
      expect(getMaxId(input)).toBe(5);
    });
  });

  describe("Func transformStrToDate", () => {
    it("str to date", () => {
      const input = "20.06.1999";
      const output = new Date(1999, 5, 20);
      expect(transformStrToDate(input)).toEqual(output);
    });
  });

  describe("Func transformDateToStr", () => {
    it("date to str", () => {
      const input = new Date(1999, 5, 20);
      const output = "20.06.1999";
      expect(transformDateToStr(input)).toEqual(output);
    });
  });

  describe("Func validatePhone", () => {
    it("correct phone", () => {
      expect(validatePhone("+7 (800) 555-3535")).toBeTruthy();
    });
    it("incorrect phone", () => {
      expect(validatePhone("+7 (800) 555-o535")).toBeFalsy();
    });
    it("incorrect phone2", () => {
      expect(validatePhone("+7 (800) 555-____")).toBeFalsy();
    });
    it("incorrect phone3", () => {
      expect(validatePhone("")).toBeFalsy();
    });
    it("incorrect phone4", () => {
      expect(validatePhone("fwegreth")).toBeFalsy();
    });
    it("incorrect phone5", () => {
      expect(validatePhone("+7(800)555-3535")).toBeFalsy();
    });
  });

  describe("Func strCompare", () => {
    it("Less", () => {
      expect(strCompare("abc", "cba")).toBe(-1);
    });
    it("Equal", () => {
      expect(strCompare("abc", "abc")).toBe(0);
    });
    it("Above", () => {
      expect(strCompare("cba", "abc")).toBe(1);
    });
  });

  describe("Func sortObjArrayByText", () => {
    const array = [{ name: "A" }, { name: "C" }, { name: "B" }];

    it("Sort type none", () => {
      expect(sortObjArrayByText(array, "name", sortTypes.none)).toEqual(array);
    });
    it("Sort type less", () => {
      const output = [{ name: "A" }, { name: "B" }, { name: "C" }];
      expect(sortObjArrayByText(array, "name", sortTypes.less)).toEqual(output);
    });
    it("Sort type above", () => {
      const output = [{ name: "C" }, { name: "B" }, { name: "A" }];
      expect(sortObjArrayByText(array, "name", sortTypes.above)).toEqual(
        output
      );
    });
  });

  describe("Func sortObjArrayByDate", () => {
    const array = [
      { date: "12.02.1982" },
      { date: "29.11.1990" },
      { date: "26.01.1986" },
    ];

    it("Sort type none", () => {
      expect(sortObjArrayByDate(array, "date", sortTypes.none)).toEqual(array);
    });
    it("Sort type less", () => {
      const output = [
        { date: "12.02.1982" },
        { date: "26.01.1986" },
        { date: "29.11.1990" },
      ];
      expect(sortObjArrayByDate(array, "date", sortTypes.less)).toEqual(output);
    });
    it("Sort type above", () => {
      const output = [
        { date: "29.11.1990" },
        { date: "26.01.1986" },
        { date: "12.02.1982" },
      ];
      expect(sortObjArrayByDate(array, "date", sortTypes.above)).toEqual(
        output
      );
    });
  });
});
