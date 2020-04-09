test('id should match', () => {
  const object = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(object.id).toEqual('111');
});
test('id and productName should match', () => {
  const object = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(object.id).toEqual('111');
  expect(object.productName).toEqual('Jest Handbook');
});
