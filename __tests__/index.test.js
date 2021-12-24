const lambda =  require('../index')
describe('index test', () => {
  test('test run index OK', async () => {
    const result = await lambda.handler({
      "uuid": "xxx"
    });

    expect(result).toEqual('Hello');
  });
});
