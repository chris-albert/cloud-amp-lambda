
const _ = require('lodash');
const DispatchService = require('./app/dispatch-service');

// app.get('/token', cors(), function (req, res) {
//   DispatchService.getToken(req.query.source,req.query)
//     .then(d => res.send(d))
//   .catch(e => res.send({error: 'Login unsuccessful'}));
// });
//
// app.get('/stream/url/:id', cors(), function (req, res) {
//   DispatchService.streamUrl(req.query.source,req.query.token,req.params.id)
//     .then(d => res.send(d));
// });
//
// app.get('/count/:id', cors(), function (req, res) {
//   DispatchService.incrementPlayCount(req.query.source,req.query.token, req.params.id)
//     .then(d => res.send({status: d}));
// });
//
// app.options('/stream/data', cors(corsOptions)); //Enable pre-flight
// app.get('/stream/data', cors(corsOptions), function (req, res) {
//   req.pipe(request(req.query.url)).pipe(res);
// });
//
//
//
// app.get('/search',cors(),function(req,res) {
//   GooglePlayService.search(req.query.token, req.query.query)
//     .then(d => res.send(d));
// });
//
// app.get('/check',function(req,res) {
//   res.send("OK");
// });

exports.library = function(event,context,callback) {
  console.info('event', event);
  DispatchService.loadLibrary(_.get(event,'source'),_.get(event,'token'))
    .then(d => callback(null, d))
    .catch(e => callback(e));
};

exports.streamUrl = function(event, context, callback) {
  console.info('event', event);
  DispatchService.streamUrl(_.get(event,'source'),_.get(event,'token'),_.get(event,'id'))
    .then(d => callback(null, d))
    .catch(e => callback(e))
};

exports.streamData = function(event, context, callback) {
  console.info('event', event);
  callback(null, "hi");
};