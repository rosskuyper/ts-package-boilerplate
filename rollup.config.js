import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: './dist/index.js',
  output: {
    file: './dist/main.cjs.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  external: ['react'],
  plugins: [nodeResolve()],
}
