/* eslint-disable */
export default {
  displayName: 'server',
  preset: '../../jest.preset.js',
  roots: ['<rootDir>/e2e/'],
  globalSetup: '<rootDir>/e2e/support/global-setup.ts',
  globalTeardown: '<rootDir>/e2e/support/global-teardown.ts',
  setupFiles: ['<rootDir>/e2e/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.e2e.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/server/e2e',
};
