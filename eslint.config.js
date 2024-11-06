module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2022: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        // 你的规则配置
    },
}