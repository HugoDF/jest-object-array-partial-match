const user = {
  id: 1,
  friends: [],
  name: 'Hugo',
  url: 'https://codewithhugo.com'
};
test('should have right id and name', () => {
  expect(user).toEqual(
    expect.objectContaining({
      id: 1,
      name: 'Hugo'
    })
  );
});
