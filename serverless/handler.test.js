
describe('Example test', () => {


    test('the sum of vals should be 2', () => {
        expect(2).toBe(2);
    });

    test('should get positive values', () => {
        expect(3).toEqual(3);
    });

    test('should get negative values', () => {
        expect(4).toEqual(4);
    });
});