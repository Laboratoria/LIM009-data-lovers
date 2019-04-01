global.window = global;
require('../src/data.js');

describe("WorldBank",() => {
  it("deberia ser un objeto",() => {
    expect(typeof WorldBank).toBe("object")
  })
  describe('filterDataCountries', () => {
    it('debería ser una función', () => {
   expect(typeof WorldBank.filterDataCountries).toBe('function');
  });
})
})

//   it('debería retornar un array de objetos de los indicadores filtrados por pais y sector', () => {
//      assert.equal(window.WorldBank.filterDataCountries(input), 'PER', 'SP').toEqual(output1);
//   });
// })
