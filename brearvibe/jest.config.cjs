module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransformer.js',
        '^.+\\.scss$': '<rootDir>/svgTransformer.js'
    },
    extensionsToTreatAsEsm: ['.jsx, .tsx'],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/src/main\\.tsx$',
        '<rootDir>/src/vite-env.d\\.ts$',
    ],
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};