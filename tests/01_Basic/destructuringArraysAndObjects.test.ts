/**
 *
 *
 */

describe('Test destructuring arrays', () => {
  type Book = {
    title: string;
    author: string;
  };

  function getAllBooks(len: number): Array<Book> {
    const newInstance: Array<Book> = new Array<Book>();

    for (let i = 0; i < len; i++) {
      newInstance.push({
        title: `Book Title 0${i}`,
        author: `Author 0${i}`,
      });
    }

    return newInstance;
  }

  test('Check length of destructured array', () => {
    const arr = getAllBooks(10);
    const [, , ...otherBooks] = arr;

    expect(arr.length).toBe(10);
    expect(otherBooks.length).toBe(8);
  });

  test('Check by reference', () => {
    const arr = getAllBooks(10);
    const [book1, book2, ...otherBooks] = arr;

    expect(book1).toBe(arr[0]);
    expect(book2).toBe(arr[1]);
    expect(otherBooks).not.toBe(arr);
  });

  test('Check by values', () => {
    const arr = getAllBooks(10);
    const [book1, book2, ...otherBooks] = arr;

    expect(book1.title).toBe('Book Title 00');
    expect(book1.author).toBe('Author 00');

    expect(book2.title).toBe('Book Title 01');
    expect(book2.author).toBe('Author 01');

    expect(otherBooks[0].title).toBe('Book Title 02');
    expect(otherBooks[0].author).toBe('Author 02');
  });
});

describe('Test destructuring object', () => {
  function getObj() {
    const objWithInnerObjs = {
      a: 22,
      b: {
        c: {
          d: 23,
        },
      },
    };

    return objWithInnerObjs;
  }

  test('Check by reference', () => {
    const obj = getObj();

    const { a: newNameForAField, b } = obj;

    expect(newNameForAField).toBe(obj.a);
    expect(b).toBe(obj.b);
    expect(b).not.toBe({
      c: {
        d: 23,
      },
    });
  });
});
