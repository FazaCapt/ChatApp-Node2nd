const expect = require('expect');

// Import is real string
const { isRealString } = require('./validation');

// isRealString 
// should reject non-string values
// should reject string with only spaces
// should allow string with non-space character

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);

        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var res = isRealString('      ');

        expect(res).toBe(false);
    });
    it('should allow string with non-space character', () => {
        var res = isRealString('  faza  ');


        expect(res).toBe(true);
    });
})