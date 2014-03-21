var jade = require('jade');
exports.render = function(fileName, response, data) {
    console.log(response)    
    console.log(data)    
    var html = jade.renderFile('./tpls/'+fileName + '.jade', data);
//    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end()
}