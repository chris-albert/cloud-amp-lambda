
const lambda = require('./index');


const library = function() {
  lambda.library({
    source: 'cloudamp',
    token: 'idk'
  }, {}, (err, out) => {
    if (err) {
      console.error('error', err);
    } else {
      console.log('out', out);
    }
  });
};

library();