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
  const discarded = new Set();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item === '--discard-next') {
      discarded.add(i + 1);
      continue;
    }

    if (item === '--double-next') {
      if (i + 1 < arr.length && !discarded.has(i + 1)) {
        const next = arr[i + 1];

        if (typeof next !== 'string' || !next.startsWith('--')) {
          result.push(next);
        }
      }
      continue;
    }

    if (item === '--discard-prev') {
      if (i > 0 && !discarded.has(i - 1)) {
        const prev = arr[i - 1];

        if (typeof prev !== 'string' || !prev.startsWith('--')) {
          result.pop();
          discarded.add(i - 1);
        }
      }
      continue;
    }

    if (item === '--double-prev') {
      if (i > 0 && !discarded.has(i - 1)) {
        const prev = arr[i - 1];

        if (typeof prev !== 'string' || !prev.startsWith('--')) {
          result.push(prev);
        }
      }
      continue;
    }

    if (!discarded.has(i)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = {
  transform,
};
