test('id should match', () => {
  const object = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(object).toEqual(
    expect.objectContaining({
      id: '111'
    })
  );
});

test('id and productName should match', () => {
  const object = {
    id: '111',
    productName: 'Jest Handbook',
    url: 'https://jesthandbook.com'
  };
  expect(object).toEqual(
    expect.objectContaining({
      id: '111',
      productName: 'Jest Handbook'
    })
  );
});
