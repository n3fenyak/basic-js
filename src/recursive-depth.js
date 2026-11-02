class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (const element of arr) {
      if (Array.isArray(element)) {
        const depth = 1 + this.calculateDepth(element);

        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
