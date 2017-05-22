const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');


describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Faza';
        var text = 'Some text var';
        // var message = { generateMessage }; || SALAH BANGET!
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });

        // store res in varieable
        // assert from match
        // asser text match
        // assert createdAt is number
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message', () => {
        var from = 'faza';
        var latitude = 15;
        var longitude = 18;
        var url = `https://www.google.com/maps?q=15,18`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    })
})