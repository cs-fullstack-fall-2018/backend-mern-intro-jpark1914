// A common object for accessing config values
// Gets included automatically because of its name index.js

const configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        // return 'YOUR_MONGO_URL';
        //mongodb://<dbuser>:<dbpassword>@ds151612.mlab.com:51612/nodetodo
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds151612.mlab.com:51612/nodetodo';
    },


};
