var expect  = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () =. {
  it('should genrate correct', () =>{
    var from = 'Jen';
    var text = 'Some message';
    var message  = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () =>{
  it('should generate locaiton object', () =>{
    var  from = 'avik';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
