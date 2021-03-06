module.exports = {
  websiteUrl: 'http://localhost:3000',
  server: {
    port: 2121,
    protocol: 'http',
    host: '0.0.0.0',
    prefix: '/api/v1',
    uploadDir: 'public/uploads/tmp'
  },
  logging: {
    level: 'debug',
    file: false,
  },
  token: {
    secret: 'b0ldrk3kwi11s15',
    expiration: 604800000,
  },
  mail: {
    host: 'smtp.example.com',
    user: 'user@user.com',
    password: 'password',
    port: 465,
    ssl: true,
    from: 'hello@boldr.io',
  },
  db: {
    url: 'postgres://postgres:password@localhost:5432/boldr',
  },
  redis: {
    url: 'redis://127.0.0.1:6379/0',
  },
  tools: {
    profile: false,
    paths: {
      publicPath: '/static/',
      entry: {
        server: 'src/serverEntry.js',
        client: 'src/clientEntry.js',
      },
      output: {
        server: 'build/server',
        client: 'build/client',
      },
      vendor: 'src/vendor.js',
    },
    vendor: [
      '@boldr/core',
      '@boldr/icons',
      '@boldr/ui',
      'draft-convert',
      'draft-js',
      'immutable',
      'lodash',
      'react-apollo',
      'react-dom',
      'react-helmet',
      'react-motion',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'react-tagsinput',
      'react-transition-group',
      'react',
      'recompact',
      'reselect',
      'redux-form',
      'redux-thunk',
      'redux',
      'serialize-javascript',
      'styled-components',
      'react-universal-component',
    ],
  },
}
