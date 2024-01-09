import * as math from './index';

test('add() method should return the sum of two positive integers', () => {
    const result = math.add(5, 8);

    expect(result).toBe(13);
});

it('subtract() method should return the correct result when subtracting two positive integers', () => {
    const result = math.subtract(5, 3);

    expect(result).toBe(2);
});

it('should return the correct multiplication result for two positive integers', () => {
    const result = math.multiply(2, 3);

    expect(result).toBe(6);
});

    // Returns the correct result when dividing a positive number by a negative number
it('should return the correct result when dividing a positive number by a negative number', () => {
    const result = math.divide(6, -3);

    expect(result).toBe(-2);
});