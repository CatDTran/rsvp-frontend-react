
var exports = module.exports;

console.log(process.env.NODE_ENV);

var apiBaseUrl = function(){
    if (process.env.NODE_ENV === 'development'){
        return 'http://localhost/api/';
    } else if(process.env.NODE_ENV === 'production'){
        return 'http://inkeepme.com/api';
    }
}


exports.apiBaseUrl = apiBaseUrl();