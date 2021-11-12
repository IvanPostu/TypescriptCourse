
describe('Test decorators future', () => {

    test('Function decorator factory', () => {
        let decoratorAppliedCount: number = 0

        // decorator factory
        function decorator(paramExample: string) {

            //decorator
            return function (target: Function) {
                decoratorAppliedCount++
            }
        }

        @decorator("hi")
        class A { }

        @decorator("hi")
        class B { }

        const instance1 = new A
        const instance2 = new A
        const instance3 = new A
        const instance4 = new A
        const instance5 = new A
        const instance6 = new A

        expect(decoratorAppliedCount).toBe(2)
    })

    test('Sealed class', () => {

        function sealed(target: Function): void {
            Object.seal(target)
            Object.seal(target.prototype)
        }

        @sealed
        class A {
            [ket: string]: any

            getA() {
                return 'A'
            }
        }

        class B extends A {


            getB() {
                return 'B'
            }

            public q = 22
        }
    })

    test('Replace constructors', () => {
        let count: number = 0

        function logger<TFunction extends { new(...args: any[]): {} }>(target: Function) {
            const newConstructor: Function = function () {
                count++
            }

            newConstructor.prototype = Object.create(target.prototype)
            newConstructor.prototype.constructor = target

            return <TFunction>newConstructor
        }

        @logger
        class A { }

        @logger
        class B { }


        const a = new A
        const b = new B
        const b1 = new B

        expect(count).toBe(3)
    })

    test('Method decorator', () => {
        'use strict'

        function readonly(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.writable = false
        }

        class A {
            @readonly
            q() { return 1 }
        }

        const a: A = new A

        expect(() => {
            a.q = () => 2
        }).toThrow(TypeError)

    })


})

