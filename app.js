var fs = require('fs'),
    async = require('async'),
    http = require('http'),
    url = require('url'),
    routes_array = require("./routes"),
    routes_funcs = require("./route_funcs");

function onRequest(request, response) {
    async.waterfall([
        function(next) {
            if(!routes_array.routes[request.url]) {
                var err = {
                    status: 404,
                    message: '404 not found'
                };

                return next(err);
            }
console.log('first func')
            next(null, routes_array.routes[request.url]);
        },
        function(route) {
            return routes_funcs[route](response);
        }
    ], function(err) {
        routes_funcs.error(err, response);
    });
    
};

http.createServer(onRequest).listen(8888);



