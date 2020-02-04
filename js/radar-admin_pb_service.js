// package: 
// file: radar-admin.proto

var radar_admin_pb = require("./radar-admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Admin = (function () {
  function Admin() {}
  Admin.serviceName = "Admin";
  return Admin;
}());

Admin.query = {
  methodName: "query",
  service: Admin,
  requestStream: false,
  responseStream: false,
  requestType: radar_admin_pb.Query,
  responseType: radar_admin_pb.QueryResponse
};

exports.Admin = Admin;

function AdminClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminClient.prototype.query = function query(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Admin.query, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AdminClient = AdminClient;

