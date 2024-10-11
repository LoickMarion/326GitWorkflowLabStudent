const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


// Add your tests here

describe('Calculator Square Root', function() {
    const res = calculator.calculateSquareRoot(121);
    it('should return 2', function() {
        assert.strictEqual(res, 11);
    });
    const res2 = calculator.calculateSquareRoot(225);
    it('should return 2', function() {
        assert.strictEqual(res2, 15);
    });
});
