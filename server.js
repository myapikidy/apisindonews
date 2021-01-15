const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const port = process.env.PORT || 5500;

server.listen(port, (err) => {
    if(err) throw err;
    console.log('running at port ' + port);
})