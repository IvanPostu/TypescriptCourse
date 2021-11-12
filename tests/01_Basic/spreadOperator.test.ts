describe('Test spread operator', () => {
  test('Check values', () => {
    const newIds = [22, 77, 91, 14];
    const allIds = [1, 2, ...newIds];
    const expectValue = [1, 2, 22, 77, 91, 14];

    expect(allIds).toEqual(expectValue);
  });

  test('Check references', () => {
    const newIds = [22, 77, 91, 14];
    const allIds = [1, 2, ...newIds];
    const expectValue = [1, 2, 22, 77, 91, 14];

    expect(allIds).not.toBe(expectValue);
  });

  test('Use spread operator with some std functions', () => {
    const nums: number[] = [2, 3, 55, 17, 11, 90, 4];
    expect(Math.max(...nums)).toBe(90);

    const newArr = [77, 890];
    newArr.push(...nums);

    expect(newArr.length).toBe(nums.length + 2);
    expect(newArr).toEqual([77, 890, 2, 3, 55, 17, 11, 90, 4]);
  });
});
