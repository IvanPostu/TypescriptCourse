import { ClassExample } from './moduleExample'
import './moduleExampleExtension'

describe('Test interface merging and module augmentation', () => {

    test('Interface merging', () => {

        interface IA1 {
            a1: number
        }

        interface IA1 {
            a2: number
        }

        const q: IA1 = {
            a1: 1,
            a2: 2
        }

        expect(Object.keys(q).length).toBe(2)

    })

    test('Module augmentation', () => {
        const instance = new ClassExample()
        expect(instance.newMethod()).toBe("hello")
    })

})

