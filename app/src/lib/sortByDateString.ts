const translations = [
  { regex: /janeiro/i, to: "Jan" },
  { regex: /fevereiro/i, to: "Feb" },
  { regex: /março/i, to: "Mar" },
  { regex: /abril/i, to: "Apr" },
  { regex: /maio/i, to: "May" },
  { regex: /junho/i, to: "Jun" },
  { regex: /julho/i, to: "Jul" },
  { regex: /agosto/i, to: "Aug" },
  { regex: /setembro/i, to: "Sep" },
  { regex: /outubro/i, to: "Oct" },
  { regex: /novembro/i, to: "Nov" },
  { regex: /dezembro/i, to: "Dec" },
];

const translate = (dateString: string) => {
  const translation = translations.find(({ regex }) => regex.test(dateString))!;

  return dateString.replace(translation.regex, translation.to);
};

function sortByDateString<T = any>(
  array: Array<any>,
  key: string,
  asc: boolean = false
): Array<T> {
  const intertalSortKey = `_${key}`;

  const translatedArray = array.map((item) => ({
    ...item,
    [intertalSortKey]: translate(item[key] as string),
  }));

  const sortedArray = translatedArray.sort((a, b) => {
    const aDate = new Date(a[intertalSortKey] as string);
    const bDate = new Date(b[intertalSortKey] as string);

    return asc
      ? aDate.getTime() - bDate.getTime()
      : bDate.getTime() - aDate.getTime();
  });

  sortedArray.forEach((_, index) => {
    delete sortedArray[index][intertalSortKey];
  });

  return sortedArray.map((item) => item as T);
}

export default sortByDateString;
