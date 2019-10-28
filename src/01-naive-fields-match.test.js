test('id should match', () => {
  const obj = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(obj.id).toEqual('111');
});
test('id and productName should match', () => {
  const obj = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(obj.id).toEqual('111');
  expect(obj.productName).toEqual('Jest Handbook');
});
