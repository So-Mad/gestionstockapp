const { calculateNewStock } = require('../../utils/productUtils');

describe('calculateNewStock', () => {
  test('ajoute du stock correctement', () => {
    expect(calculateNewStock(10, 5, true)).toBe(15);
  });

  test('retire du stock correctement', () => {
    expect(calculateNewStock(10, 3, false)).toBe(7);
  });

  test('leve une erreur si la quantité est négative', () => {
    expect(() => calculateNewStock(10, -5)).toThrow("Quantité invalide");
  });
});
