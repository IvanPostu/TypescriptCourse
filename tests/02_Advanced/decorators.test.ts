/* eslint-disable @typescript-eslint/no-unused-vars */

describe('Test decorators future', () => {

    test('Function decorator factory', () => {
        let decoratorAppliedCount = 0

        // decorator factory
        function decorator(paramExample: string): CallableFunction {
            //decorator
            return function (target: () => void): void {
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

        function sealed(target: CallableFunction): void {
            Object.seal(target)
            Object.seal(target.prototype)
        }

        @sealed
        class A {
            [ket: string]: unknown

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
        let count = 0

        function logger<TFunction extends { new(...args: unknown[]) }>(target: CallableFunction) {
            const newConstructor: CallableFunction = function () {
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

        function writable(isWritable:boolean) {
            return function (
              target: object,
              key: string | symbol,
              descriptor: PropertyDescriptor
            ) {
              descriptor.writable = isWritable
              return descriptor;
            };
          }


        class A {
            @writable(false)
            q() { return 1 }
        }

        class B {
            @writable(true)
            q() { return 1 }
        }

        const a: A = new A
        const b: B = new B

        expect(() => {
            a.q = () => 2
        }).toThrow(TypeError)

        b.q = () => 22
        expect(b.q()).toBe(22)
    })


})

