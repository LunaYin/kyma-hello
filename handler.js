var path = require('path');
module.exports = {
    main: function (event, context) {
        console.log('Join: ' + path.resolve('handler.js'));
        return "Hello world";
    }
}

