beforeEach(() => {

})
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split(['e', 3, 3002, 5])).toEqual([['e', 3], [3002, 5]]);
    expect(split([99, 77, 3, 5, 'y', 0, -1])).toEqual([[ 99, 77, 3, 5 ], [ 'y', 0, -1 ]]);

  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([2],[3])).toEqual([2,3]);
    expect(merge([99],[3])).toEqual([3,99]);
  });
});
