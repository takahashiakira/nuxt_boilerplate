const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  snapshotSerializers: ['jest-serializer-vue'],
  setupFiles: ['<rootDir>/tests/unit/setup'],
  testMatch: ['<rootDir>/tests/unit/**/*.spec.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
    'components/**/*.{js,vue}',
    'middleware/**/*.{js,vue}',
    'pages/**/*.{js,vue}',
    'plugins/**/*.{js,vue}',
    'pages/**/*.{js,vue}',
    '!store.js',
    '!store/index.js',
    '!store/**.js',
    '!store/**/state.js',
  ],
};
