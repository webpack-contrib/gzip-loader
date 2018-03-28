const path = require('path');
const MemoryFS = require('memory-fs');
const webpack = require('webpack');

const fs = new MemoryFS();
const loaderPath = path.join(__dirname, '../');
const fixturesPath = path.join(__dirname, 'fixtures');
const outputPath = path.join(__dirname, 'output');

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.gz$/,
        enforce: 'pre',
        use: loaderPath,
      },
    ],
  },
};

test('loads gzipped file', () =>
  new Promise((resolve) => {
    const filename = 'a.js';
    const filepath = path.join(outputPath, filename);
    const compiler = webpack(
      Object.assign({}, baseConfig, {
        entry: path.join(fixturesPath, `${filename}.gz`),
        output: { path: outputPath, filename },
      })
    );

    compiler.outputFileSystem = fs;
    compiler.run(() => {
      const content = fs.readFileSync(filepath, 'utf8');
      expect(content).toMatch('const a = 1');
      resolve();
    });
  }));
