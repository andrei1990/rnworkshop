module.exports = {
    root: true,
    env: {
        "browser": true,
        "es2020": true,
        "react-native/react-native": true
    },
    extends: [
        "plugin:react/recommended",
        "standard",
        '@react-native-community',
        "prettier",
        "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "react-native"
    ],
    rules: {
        "react-native/object-curly-spacing": 0,
        "no-case-declarations": 0,
        "react-native/no-raw-text": 2,
        "react-native/no-inline-styles": 1,
        'prettier/prettier' : 0
    }
  };
  