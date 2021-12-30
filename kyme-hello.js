var path = require('path');
module.exports = {
    main: function (event, context) {
        console.log('Join: ' + path.join('kyma-hello'+'example'));
        return "Hello world";
    }
}

