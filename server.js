var simpleRestful = require('simple-restful');
var server = new simpleRestful.createServer({port: 8081});

//The minimum information to define the resource
var simpleResourceInfo = {
    name: "roba",
    idField: "name",
    repository: "InMemory"
};

//register the resource and then run
server.addResource(simpleResourceInfo);
server.run();
