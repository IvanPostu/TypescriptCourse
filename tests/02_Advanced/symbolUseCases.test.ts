

describe('Test symbol use cases', () => {

    test('Unique, immutable, constant', () => {

        const id1 = Symbol("qwe")
        const id2 = Symbol("qwe")

        expect(id1).not.toBe(id2)
        expect(id1).not.toEqual(id2)
    })

    test('Class with unique id', () => {

        const CLASS_INFO: symbol = Symbol('Class description')

        class A {
            public a: number

            [CLASS_INFO](): string {
                return CLASS_INFO.toString()
            }
        }

        const instance = new A()
        expect(instance[CLASS_INFO]()).toBe(CLASS_INFO.toString())

    })

    test('Overload instanceof operator', () => {

        class A {
            public name: number

            static [Symbol.hasInstance](obj: Object){
                return obj.hasOwnProperty('name') && obj.hasOwnProperty('callMe')
            }
        }

        const obj = {
            name: '123',
            callMe: () => {}
        }
        
        expect(obj instanceof A).toBeTruthy()
    })

})