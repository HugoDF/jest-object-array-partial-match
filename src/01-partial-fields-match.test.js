test('id should match', () => {
  const obj = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(obj).toEqual(
    expect.objectContaining({
      id: '111'
    })
  );
});

test('id and productName should match', () => {
  const obj = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(obj).toEqual(
    expect.objectContaining({
      id: '111',
      productName: 'Jest Handbook'
    })
  );
});
