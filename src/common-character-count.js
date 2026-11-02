function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const characters = s2.split('');

  for (const char of s1) {
    const index = characters.indexOf(char);

    if (index !== -1) {
      count++;
      characters.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
