class Employee {
  title: string;

  addToSchedule(): string {
    return 'addToSchedule';
  }

  logTitle(): string {
    return 'logTitle';
  }
}

class Researcher {
  doResearch(topic: string): string {
    return `Research: ${topic}`;
  }
}

interface Librarian {
  assistCustomer(customerName: string): string;
}

describe('Test classes functionality', () => {
  test('Mixins', () => {
    class UniversityLibrarian implements Librarian, Employee, Researcher {
      title: string;

      addToSchedule: () => string;

      logTitle: () => string;

      doResearch: (string) => string;

      assistCustomer(customerName: string): string {
        return `${customerName} is assisting`;
      }
    }

    function applyMixins(derivedCtor: CallableFunction, baseCtors: CallableFunction[]) {
      baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
      });
    }

    applyMixins(UniversityLibrarian, [Employee, Researcher]);

    const librarian: UniversityLibrarian = new UniversityLibrarian();
    const researcher: Researcher = librarian as Researcher;
    const employee = librarian as Employee;

    expect(researcher.doResearch('aa')).toBe('Research: aa');

    expect(employee.addToSchedule()).toBe('addToSchedule');
    expect(employee.logTitle()).toBe('logTitle');

    expect(librarian.assistCustomer('aa')).toBe('aa is assisting');

    expect(librarian === researcher).toBeTruthy();
    expect(librarian === employee).toBeTruthy();

    expect(researcher === (employee as UniversityLibrarian)).toBeTruthy();
  });
});
