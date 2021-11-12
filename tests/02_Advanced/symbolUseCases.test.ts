describe('Test symbol use cases', () => {
  test('Unique, immutable, constant', () => {
    const id1 = Symbol('qwe');
    const id2 = Symbol('qwe');

    expect(id1).not.toBe(id2);
    expect(id1).not.toEqual(id2);
  });

  test('Class with unique id', () => {
    const CLASS_INFO: unique symbol = Symbol('Class description');

    class A {
      public a: number;

      [CLASS_INFO](): string {
        return CLASS_INFO.toString();
      }
    }

    const instance = new A();
    expect(instance[CLASS_INFO]()).toBe(CLASS_INFO.toString());
  });

  test('Overload instanceof operator', () => {
    class A {
      public name: number;

      static [Symbol.hasInstance](obj: Record<string, unknown>) {
        const isInstanceof: boolean =
          Object.keys(obj).includes('name') && Object.keys(obj).includes('callMe');

        return isInstanceof;
      }
    }

    const obj = {
      name: '123',
      callMe: () => {
        console.log(1);
      },
    };

    expect(obj instanceof A).toBeTruthy();
  });
});
