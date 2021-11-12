describe('Test union and intersection types', () => {
  test('Union type', () => {
    /**
     * Union types - specify several valid types for a value.
     */
    function unionGetId(_id: number | string): number | string {
      return _id;
    }

    const id1 = unionGetId(1);
    const id2 = unionGetId('hi');
    expect(typeof id1).toBe('number');
    expect(typeof id2).toBe('string');
  });

  test('Intersection type', () => {
    interface Z {
      q: number;
    }

    interface X {
      w: string;
    }

    /**
     * Intersection types - specify a value that will contain all members
     * of several types.
     */
    function intersectionGetId(_id: Z & X): Z & X {
      return _id;
    }

    const z: Z & X = {
      q: 1,
      w: '',
    };
    const id1 = intersectionGetId(z);

    expect(typeof id1.q).toBe('number');
    expect(typeof id1.w).toBe('string');
  });
});
