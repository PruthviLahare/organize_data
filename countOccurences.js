const frequencyCounter = function (frequencyCounter, element) {
  const isKeyPresent = element in frequencyCounter;

  frequencyCounter[element] = isKeyPresent ? frequencyCounter[element] + 1 : 1;
  return frequencyCounter;
};

export const occurenceCounter = function (list) {
  return list.reduce(frequencyCounter, {});
};

console.log(occurenceCounter([1, 1, 29, 5, 8, 5]));
