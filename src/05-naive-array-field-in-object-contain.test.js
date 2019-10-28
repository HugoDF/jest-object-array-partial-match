const user = {
  id: 1,
  name: 'Hugo',
  friends: [3, 5, 22]
};
test('user 3 should be a friend of user', () => {
  expect(user.friends.some(({friends}) => friends.includes(3))).toBe(true);
});
