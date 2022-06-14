module.export = function sum(a, b) {
  const res = a - b;
  if (Number.isNaN(res)) {
    throw new Error("Invalide Operation");
  }
  return res;
};
