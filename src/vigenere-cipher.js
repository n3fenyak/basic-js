class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, true);
  }

  decrypt(message, key) {
    return this.process(message, key, false);
  }

  process(message, key, isEncrypt) {
    if (
      typeof message !== 'string' ||
      typeof key !== 'string' ||
      !message ||
      !key
    ) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const text = message.toUpperCase();
    const cipherKey = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (const char of text) {
      const charIndex = alphabet.indexOf(char);

      if (charIndex === -1) {
        result += char;
        continue;
      }

      const shift = alphabet.indexOf(
        cipherKey[keyIndex % cipherKey.length]
      );

      const newIndex = isEncrypt
        ? (charIndex + shift) % 26
        : (charIndex - shift + 26) % 26;

      result += alphabet[newIndex];
      keyIndex++;
    }

    return this.isDirect
      ? result
      : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
