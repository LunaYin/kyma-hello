var path = require('path');
module.exports = {
    main: function (event, context) {
        console.log('resolve: ' + path.resolve('kyma-hello.js'));
        return "Hello world";
    }
}

