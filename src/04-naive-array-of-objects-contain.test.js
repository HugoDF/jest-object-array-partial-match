const users = [{id: 1, name: 'Hugo'}, {id: 2, name: 'Francesco'}];
test('example 1 > we should have ids 1 and 2', () => {
  const [first, second] = users;
  expect(first.id).toEqual(1);
  expect(second.id).toEqual(2);
});
test('example 2 > we should have ids 1 and 2', () => {
  expect(users.some(({id}) => id === 1)).toBe(true);
  expect(users.some(({id}) => id === 2)).toBe(true);
});
