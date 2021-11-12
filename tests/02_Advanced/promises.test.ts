describe('Test promises', () => {
  function simpleAsyncFunction(num: number, delayInMilliseconds: number): Promise<number> {
    const promise: Promise<number> = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num >= 0) {
          resolve(num);
        } else {
          reject(new Error('Bad num value'));
        }
      }, delayInMilliseconds);
    });

    return promise;
  }

  test('Promise', () => {
    expect(simpleAsyncFunction(-1, 0)).rejects.toBeInstanceOf(Error);
    expect(simpleAsyncFunction(1, 0)).resolves.toBe(1);
  });

  test('Async/await', async () => {
    const asyncResult = await simpleAsyncFunction(1, 0);
    expect(asyncResult).toBe(1);

    expect(() => {
      return simpleAsyncFunction(-1, 0);
    }).rejects.toBeInstanceOf(Error);
  });
});
