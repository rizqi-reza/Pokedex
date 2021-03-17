// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    testFailureExitCode: 0,
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!pages/{_app,_document,_error}.{ts,tsx}',
      '!next-env.d.ts',
      '!<rootDir>/service-worker.js',
      '!<rootDir>/node_modules/',
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
      '^@pages/(.*)': '<rootDir>/pages/$1',
      '^@components/(.*)': '<rootDir>/components/$1',
      '^@utils/(.*)': '<rootDir>/utils/$1',
      '^@interfaces/(.*)': '<rootDir>/interfaces/$1',
      '^@styles/(.*)': '<rootDir>/styles/$1',
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };
  