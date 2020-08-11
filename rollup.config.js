export default {
  entry: `${__dirname}/dist/index.js`,
  dest: `${__dirname}dist/main.cjs.js`,
  format: 'cjs',
  external: ['react'],
}
