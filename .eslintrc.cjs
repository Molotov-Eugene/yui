module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jquery": true,
    },
    "extends": [
        "airbnb-base",
        "jquery",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "import/extensions": ['error', { css: 'always', html: 'always', js: 'always' }]
    }
}
