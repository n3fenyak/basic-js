function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const mainString = String(str);

  let additionString = '';

  if (addition !== undefined) {
    additionString = Array(additionRepeatTimes)
      .fill(String(addition))
      .join(String(additionSeparator));
  }

  const resultString = mainString + additionString;

  return Array(repeatTimes)
    .fill(resultString)
    .join(String(separator));
}

module.exports = {
  repeater,
};
