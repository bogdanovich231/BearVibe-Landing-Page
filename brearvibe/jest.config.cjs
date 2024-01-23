module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransformer.js',
        '^.+\\.scss$': '<rootDir>/svgTransformer.js'
    },
    extensionsToTreatAsEsm: ['.jsx, .tsx'],

    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};