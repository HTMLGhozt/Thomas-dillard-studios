const { server } = require('../server.js');

describe('server', () => {
  it('should be a function', () => {
    expect(typeof server).toBe('function');
  });
  it('should have a method of listen', () => {
    expect(typeof server.listen).toBe('function');
  });
});
