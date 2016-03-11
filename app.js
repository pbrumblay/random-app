'use strict';

var Hapi = require('hapi');
var randomServer = new Hapi.Server();
var uuid = require('node-uuid');

function getRandomNumber(request, reply) {
    var id = request.query.customerId;
    console.log(request.server.info.port);
    var randomNumber = uuid.v4();
    console.log('Random Number: ' + randomNumber);
    return reply(randomNumber);
}

randomServer.connection({port: 8082});


randomServer.route({
    method: "GET",
    path: '/random',
    handler: getRandomNumber
});


randomServer.start(function(){
    console.log('Server running at:', randomServer.info.uri);
});
