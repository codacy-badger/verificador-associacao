// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}', '!<rootDir>/src/index.jsx'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: [
    'text',
    'lcov',
    'clover',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      // branches: 80,
      // functions: 80,
      // lines: 80,
      // statements: 80,
      branches: 0,
      functions: 70,
      lines: 60,
      statements: 60,
    },
  },
  rootDir: '../',
  maxWorkers: '80%',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
  notify: true,
  notifyMode: 'failure',
  resetMocks: true,
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/fileTransformer.js',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};
