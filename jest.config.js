
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  setupFiles: ['.'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost:3000',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

