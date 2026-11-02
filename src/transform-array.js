/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    switch (element) {
      case '--discard-next':
        i++;
        break;

      case '--discard-prev':
        result.pop();
        break;

      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;

      default:
        result.push(element);
    }
  }

  return result;
}

module.exports = {
  transform
};
