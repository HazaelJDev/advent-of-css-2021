export const days = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-three",
  "twenty-four"
];

export const getIcons = (iconsObj) => {
  const newArray = [...iconsObj, ...iconsObj];

  newArray.sort(() => {
    return Math.random() - 0.5;
  });

  return newArray;
};
