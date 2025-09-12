const { calcularMediaAluno } = require('../src/calcularMediaAluno');



describe('calcularMediaAluno', () => {
  test('lança erro se a1 ou a2 são undefined', () => {
    expect(() => calcularMediaAluno(undefined, 7)).toThrow("Notas a1 ou a2 não informadas");
    expect(() => calcularMediaAluno(7, undefined)).toThrow("Notas a1 ou a2 não informadas");
  });

  test('lança erro se a1 ou a2 são negativos', () => {
    expect(() => calcularMediaAluno(-1, 7)).toThrow("Notas a1 ou a2 não podem ser negativas");
    expect(() => calcularMediaAluno(7, -1)).toThrow("Notas a1 ou a2 não podem ser negativas");
  });

  test('calcula média base sem a3', () => {
    expect(calcularMediaAluno(7, 8)).toBeCloseTo(7*0.4 + 8*0.6);
  });

  test('lança erro se a3 é negativa', () => {
    expect(() => calcularMediaAluno(7, 8, -2)).toThrow("Nota a3 não pode ser negativa");
  });

  test('melhor combinação é a1 e a3', () => {
   
    expect(calcularMediaAluno(9, 5, 10)).toBeCloseTo(8.4);
  });

  test('melhor combinação é a3 e a2', () => {
   
    expect(calcularMediaAluno(5, 9, 10)).toBeCloseTo(9.4);
  });
});
