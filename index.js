const http = require('http');
const url = require('url');
const fs = require('fs');

const readFile = () => {
    return fs.readFileSync(process.cwd() + '/mock/test.json');
};

http.createServer(function (request, response) {
    const method = request.method.toUpperCase();
    const pathname = url.parse(request.url,true).pathname;
    if (method === 'GET') {
        let result = {};
        switch(pathname){
            case '/test':
                result = readFile();
                break;
            default :
                result = JSON.stringify({status:false,data:null});
                break;
        }
        response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF8'});
        response.end(result);
    }
}).listen(9090);

console.log('Server running at http://127.0.0.1:9090/');

