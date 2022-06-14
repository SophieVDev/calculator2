module.exports = function divide(a, b) {
  const res = a / b;
  if (Number.isNaN(res)) {
    throw new Error("Invalide Operation");
  }
  return res;
};
