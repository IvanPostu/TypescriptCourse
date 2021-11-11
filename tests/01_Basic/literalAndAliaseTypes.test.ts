

describe('Test literal and aliases', () => {

    test('Literal type', () => {

        const q: 'Category' = 'Category'

        expect(q).toBe('Category')

    })

    test('Aliases', () => {
        type EmployeeType = 'Boss' | 'Manager'
        
        const employee1 : EmployeeType = 'Boss'
        const employee2 : EmployeeType = 'Manager'

        expect(employee1).toBe('Boss')
        expect(employee2).toBe('Manager')
    })

})
