module.exports = {
  cacheDirectory: '.boldr/cache/jest',
  clearMocks: true,
  testRegex: '.*.test\\.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './internal/jest/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ['packages/.*/build', 'packages/.*/lib'],
  roots: [
    '<rootDir>/packages/auth',
    '<rootDir>/packages/core',
    '<rootDir>/packages/frontend',
    '<rootDir>/packages/utils',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/(internal|build|.boldr|docs|bin|.idea|public)/',
    '__snapshots__',
  ],
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: './internal/jest/setup.js',
  transform: {
    '^.+\\.jsx?$': './internal/jest/transform.js',
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/auth/src/**/*.js',
    'packages/core/src/**/*.js',
    'packages/frontend/src/**/*.js',
    'packages/utils/src/**/*.js',
    '!packages/utils/src/gql/*.js',
    '!packages/utils/src/logic/*.js',
    '!packages/utils/src/objects/*.js',
    '!packages/utils/src/node/*.js',
    '!packages/core/src/util/*.js',
    '!packages/core/src/shared/*.js',
    '!packages/core/src/apollo/batchNetworkInterface.js',
    '!packages/core/src/apollo/networkInterface.js',
    '!packages/core/src/apollo/extractFiles.js',
    '!packages/core/src/client.js',
    '!packages/core/src/common.js',
    '!packages/core/src/server.js',
    '!packages/frontend/src/clientEntry.js',
    '!packages/frontend/src/serverEntry.js',
    '!packages/frontend/src/vendor.js',
    '!packages/**/index.js',
    '!packages/tools/**',
    '!packages/server/**',
    '!packages/cli/**',
    '!**/__mocks__/**',
    '!**/__fixtures__/**',
    '!**/__tests__/**',
  ],
  coveragePathIgnorePatterns: [
    '/(internal|.boldr|docs|bin|.idea|public|build)/',
    '/flow-typed/',
    '/packages/tools/',
    '/__fixtures__/',
    '/packages/server/',
    '/packages/cli',
    '/node_modules/',
  ],
  coverageDirectory: 'coverage',
};
