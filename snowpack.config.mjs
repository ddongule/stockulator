export default {
  mount: {
    src: { url: '/dist' },
    public: { url: '/' },
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
    polyfillNode: true,
  },
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    sourceMap: true,
  },
  alias: {},
};
