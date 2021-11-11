

function add(a: number, b: number): number{
    return a + b
}

describe('test add function', () => {

    test('It should returns 15 for add(5, 10)', () => {
        expect(add(5, 10)).toBe(15)
    })

})