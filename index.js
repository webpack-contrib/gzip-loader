const { gunzip } = require('zlib');

module.exports = function loader(buf) {
  const callback = this.async();
  this.cacheable(true);
  gunzip(buf, (err, unzipped) => {
    if (err) {
      callback(err);
    } else {
      callback(err, unzipped);
    }
  });
};

module.exports.raw = true;
