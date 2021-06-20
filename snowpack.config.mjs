export default {
  mount: {
    src: { url: '/dist' },
    public: { url: '/', static: true },
  },
  plugins: [
    [
      '@snowpack/plugin-sass',
      '@snowpack/plugin-react-refresh',
      '@snowpack/plugin-webpack',
      '@snowpack/plugin-run-script',
    ],
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    '@components': './src/components',
  },
};
