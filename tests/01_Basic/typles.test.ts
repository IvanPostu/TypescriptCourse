

/**
 * Typle type - combines a set of numerically named
 * properties with the members of an array type.
 */

describe('Test typles operator', () => {

    test('Simple tuple', () => {

        function q(a: [number, string]): [number, string] {
            return a
        }

        const tupleInstance: [number, string] = [1, 'aa']

        expect(tupleInstance[0]).toBe(1)
        expect(tupleInstance[1]).toBe('aa')
        expect(q(tupleInstance)).toBe(tupleInstance)
    })

    test('Custom tuple', () => {

        interface IKeyValueTyple<K, V> extends Array<K | V>{
            0: K
            1: V
        }

        class KeyValueTypleClass<K, V> extends Array<K | V>{
            public readonly 0: K;
            public readonly 1: V;

            public constructor(val0: K, val1: V){
                super()

                this[0] = val0
                this[1] = val1
            }
        }

        function q(a: KeyValueTypleClass<number, string>):  IKeyValueTyple<number, string> {
            return a
        }

        const tupleInstance1: [number, string] = [1, 'aa']
        let tupleInstance2: IKeyValueTyple<number, string> = [
            2, 'bb'
        ]
        let tupleInstance3: KeyValueTypleClass<number, string> = new KeyValueTypleClass<number, string> (1, "aa")
        
        tupleInstance2 = tupleInstance1
        tupleInstance3 = tupleInstance2

        expect(tupleInstance1[0]).toBe(1)
        expect(tupleInstance1[1]).toBe('aa')
        expect(q(tupleInstance1)).toBe(tupleInstance1)
        expect(tupleInstance2).toBe(tupleInstance1)
        expect(tupleInstance3).toBe(tupleInstance1)

    })

})
