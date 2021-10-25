import sortByDateString from "../sortByDateString";

describe("sortByDateString function", () => {
  const ascendingTestCases = [
    [
      "same months and mixed years",
      [
        { key: "Janeiro de 2018" },
        { key: "Janeiro de 2020" },
        { key: "Janeiro de 2019" },
      ],
      [
        { key: "Janeiro de 2020" },
        { key: "Janeiro de 2019" },
        { key: "Janeiro de 2018" },
      ],
    ],
    [
      "mixed months and same year",
      [
        { key: "Julho de 1941" },
        { key: "Fevereiro de 1941" },
        { key: "Outubro de 1941" },
        { key: "Abril de 1941" },
        { key: "Junho de 1941" },
        { key: "Agosto de 1941" },
        { key: "Janeiro de 1941" },
        { key: "Novembro de 1941" },
        { key: "Dezembro de 1941" },
        { key: "Março de 1941" },
        { key: "Maio de 1941" },
        { key: "Setembro de 1941" },
      ],
      [
        { key: "Dezembro de 1941" },
        { key: "Novembro de 1941" },
        { key: "Outubro de 1941" },
        { key: "Setembro de 1941" },
        { key: "Agosto de 1941" },
        { key: "Julho de 1941" },
        { key: "Junho de 1941" },
        { key: "Maio de 1941" },
        { key: "Abril de 1941" },
        { key: "Março de 1941" },
        { key: "Fevereiro de 1941" },
        { key: "Janeiro de 1941" },
      ],
    ],
    [
      "mixed years",
      [
        { key: "Novembro de 1997" },
        { key: "Outubro de 2040" },
        { key: "Setembro de 2001" },
      ],
      [
        { key: "Outubro de 2040" },
        { key: "Setembro de 2001" },
        { key: "Novembro de 1997" },
      ],
    ],
  ];

  test.each(ascendingTestCases)(
    "Sorts %p descending",
    (title, inputArray, outPutArray) => {
      expect(sortByDateString(inputArray as Array<any>, "key")).toEqual(
        outPutArray
      );
    }
  );

  const descendingTestCases = [
    [
      "same months and mixed years",
      [
        { key: "Janeiro de 2018" },
        { key: "Janeiro de 2020" },
        { key: "Janeiro de 2019" },
      ],
      [
        { key: "Janeiro de 2018" },
        { key: "Janeiro de 2019" },
        { key: "Janeiro de 2020" },
      ],
    ],
    [
      "mixed months and same year",
      [
        { key: "Julho de 1941" },
        { key: "Fevereiro de 1941" },
        { key: "Outubro de 1941" },
        { key: "Abril de 1941" },
        { key: "Junho de 1941" },
        { key: "Agosto de 1941" },
        { key: "Janeiro de 1941" },
        { key: "Novembro de 1941" },
        { key: "Dezembro de 1941" },
        { key: "Março de 1941" },
        { key: "Maio de 1941" },
        { key: "Setembro de 1941" },
      ],
      [
        { key: "Janeiro de 1941" },
        { key: "Fevereiro de 1941" },
        { key: "Março de 1941" },
        { key: "Abril de 1941" },
        { key: "Maio de 1941" },
        { key: "Junho de 1941" },
        { key: "Julho de 1941" },
        { key: "Agosto de 1941" },
        { key: "Setembro de 1941" },
        { key: "Outubro de 1941" },
        { key: "Novembro de 1941" },
        { key: "Dezembro de 1941" },
      ],
    ],
    [
      "mixed years",
      [
        { key: "Novembro de 1997" },
        { key: "Outubro de 2040" },
        { key: "Setembro de 2001" },
      ],
      [
        { key: "Novembro de 1997" },
        { key: "Setembro de 2001" },
        { key: "Outubro de 2040" },
      ],
    ],
  ];

  test.each(descendingTestCases)(
    "Sorts %p ascending",
    (title, inputArray, outPutArray) => {
      expect(sortByDateString(inputArray as Array<any>, "key", true)).toEqual(
        outPutArray
      );
    }
  );
});
