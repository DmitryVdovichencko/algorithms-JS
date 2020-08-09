import binarySearch from '../01-binary-search';

const arr = [0,1,2,3,4,5];

describe('Binary search in sorted array', () => {
    it('Try to find element in sorted array of nums', async (done) => {
        binarySearch(3)
        .expect(4);
      done();
    });
  });
  
