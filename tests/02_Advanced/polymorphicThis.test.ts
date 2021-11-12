describe('Polymorphic this test', () => {
  test('Example of polymorphic this', () => {
    class Vehicle {
      public getThis() {
        return this;
      }
    }

    class Truck extends Vehicle {}

    class Car extends Vehicle {}

    const vehicle: Vehicle = new Vehicle();
    const car: Car = new Car();
    const truck: Truck = new Truck();

    expect(typeof vehicle).toBe(typeof vehicle.getThis());
    expect(typeof car).toBe(typeof car.getThis());
    expect(typeof truck).toBe(typeof truck.getThis());
  });

  test('Fluent API of polymorphic this', () => {
    class C1 {
      public q1(): [string, C1] {
        return ['q1C1', this];
      }

      public q2(): [string, C1] {
        return ['q2C1', this];
      }

      public getClassName(): string {
        let className = 'C1';

        if (this instanceof C2) {
          className = 'C2';
        }

        if (this instanceof C3) {
          className = 'C3';
        }

        return className;
      }
    }

    class C2 extends C1 {
      public q3(): [string, C2] {
        return ['q3C2', this];
      }
    }

    class C3 extends C1 {
      public q4(): [string, C3] {
        return ['q4C3', this];
      }
    }

    const c1 = new C1();
    const c2 = new C2();
    const c3 = new C3();

    expect(c2.q1()[0]).toBe('q1C1');
    expect(c2.q2()[0]).toBe('q2C1');
    expect(c2.q3()[0]).toBe('q3C2');

    expect(c2.q1()[1].constructor.name).toBe('C2');
    expect(c2.q2()[1].constructor.name).toBe('C2');
    expect(c2.q3()[1].constructor.name).toBe('C2');

    expect(c1.getClassName()).toBe('C1');
    expect(c2.getClassName()).toBe('C2');
    expect(c3.getClassName()).toBe('C3');
  });
});
