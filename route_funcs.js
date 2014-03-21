var view = require('./view');

exports.index = function(response) {
    var data = {
        title: 'Главная страница'
    };

    view.render('index', response, data);
}

exports.listfiles = function(response) {
    var data = {
        title: 'List of files'
    };
    view.render('fileList', response, data);
}
exports.error = function(errorObj, response) {
    var data = {
        title: 'Error',
        msg: errorObj.message
    };
    response.statusCode = errorObj.status;
    view.render('error', response, data);
}