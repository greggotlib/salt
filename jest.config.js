module.exports = {
  // Specify the test environment
  testEnvironment: 'jsdom',

  // Define the file patterns for test files
  testMatch: ['<rootDir>/src/**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  // Set up module name mappings for imports
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/fileMock.js',
  },

  // Configure module file extensions
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Set up test coverage reporting
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
}
