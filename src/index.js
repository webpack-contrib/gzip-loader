import { gunzip } from 'zlib';

function loader(buf) {
  const callback = this.async();
  this.cacheable(true);
  gunzip(buf, (err, unzipped) => {
    if (err) {
      callback(err);
    } else {
      callback(err, unzipped);
    }
  });
}

loader.raw = true;

export default loader;
