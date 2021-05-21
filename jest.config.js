export default {
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/*",
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/api/contracts/",
        "<rootDir>/src/api/ents/",
        "<rootDir>/src/export/",
        "<rootDir>/src/component/shaders/",
        "<rootDir>/src/mapillary.js",
        "<rootDir>/src/viewer/events/",
        "<rootDir>/src/viewer/options/",
        "interfaces"
    ],
    coverageProvider: "v8",
    moduleDirectories: [
        "node_modules",
    ],
    moduleFileExtensions: [
        "js",
    ],
    rootDir: "build/cjs",
    slowTestThreshold: 1,
    watchman: false,
};