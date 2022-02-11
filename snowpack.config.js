/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  buildOptions: {
    baseUrl: '/lazy-loading-wolfs',
    out: 'docs'
  },
}
