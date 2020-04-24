const delay = require('mocker-api/lib/delay');
const global = require('./global');
const images = require('./images');


module.exports = delay({
    ...global,
    ...images
}, 1000)