import * as math from './index';


describe('add()', () => {
    test('returns the sum of two positive integers', () => {    
        expect(math.add(5, 8)).toBe(13);
    });
    test('returns 5 if called with add(2, 3)', () => {
        expect(math.add(2, 3)).toBe(5);
    });
  
    test('returns a negative value if the greater argument is negative', () => {
        expect(math.add(2, -3)).toBeLessThan(0);
    });
  
    test('returns a value close to 0.3 if called with add(0.1, 0.2)', () => {
        expect(math.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

describe('subtract()', () => {
    test('returns 10 if called with subtract(15, 5)', () => {
        expect(math.subtract(15, 5)).toBe(10);
    });
  
    test('returns a negative value if the second argument is greater than the first one', () => {
        expect(math.subtract(5, 15)).toBeLessThan(0);
    });
    test('returns the correct result when subtracting two positive integers', () => {    
        expect(math.subtract(5, 3)).toBe(2);
    });
});

describe('multiply()', () => {
    test('returns the correct multiplication result for two positive integers', () => {
       expect(math.multiply(2, 3)).toBe(6);
    });
    test('returns 8 if called with multiply(2, 4)', () => {
        expect(math.multiply(2, 4)).toBe(8);
    });
  
    test('returns a negative value if only the first argument is negative', () => {
        expect(math.multiply(-2, 4)).toBeLessThan(0);
    });
  
    test('returns a negative value if only the second argument is negative', () => {
        expect(math.multiply(2, -4)).toBeLessThan(0);
    });
  
    test('returns a positive value if called with two negative arguments', () => {
        expect(math.multiply(-2, -4)).toBeGreaterThan(0);
    });
});


describe('divide()', () => {
    test('returns the correct result when dividing a positive number by a negative number', () => {    
        expect(math.divide(6, -3)).toBe(-2);
    });
    test('returns 3 if called with divide(9, 3)', () => {
        expect(math.divide(9, 3)).toBe(3);
    });
  
    test('returns "You should not do this!" if called with 0 as second argument', () => {
        expect(math.divide(9, 0)).toBe('You should not do this!');
    });
    
});
  
