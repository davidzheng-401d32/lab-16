'use strict';

jest.mock('fs');

const read = require('../app');

describe('File Read', () => {
  it('Throws errr when bad file path is given', (done) => {
    let file = '../bad.txt';
    read(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toEqual('Invalid File');
      done();
    });
  });
});