describe('Test type guards typescript mechanism', () => {
  class A {
    public a(): 'a' {
      return 'a';
    }
  }

  class B {
    public b(): 'b' {
      return 'b';
    }
  }

  function work(instance: A | B): 'a' | 'b' {
    if (instance instanceof A) {
      return instance.a();
    }

    if (instance instanceof B) {
      return instance.b();
    }

    throw new Error('Not implemented exception');
  }

  test('Default typescript type guard', () => {
    expect(work(new A())).toBe('a');
    expect(work(new B())).toBe('b');
  });

  test('Custom type guard', () => {
    function isA(a: unknown): a is A {
      return (<A>a).a !== undefined;
    }

    const var1: unknown = new A();

    expect(isA(var1)).toBeTruthy();
    if (isA(var1)) {
      expect(var1.a()).toBe('a');
    }
  });
});
