const oddArray = [1, 3, 5, 7, 9, 11, 13];
test('should start correctly', () => {
  expect(oddArray).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
});
