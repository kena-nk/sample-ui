module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // reactインポート不要
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    // js, jsx, ts, tsxの拡張子でimportするのを許可
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // js, jsx, ts, tsxの拡張子でjsxの構文を許容
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 配列のindexをkeyに使用することを許可する
    'react/no-array-index-key': 'off',
    // propsにスプレッド演算子で渡すことを許可する
    'react/jsx-props-no-spreading': 'off',
    // コンポーネントをアロー関数で定義することを許可する
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],

    // import時に拡張子が不要
    'import/extensions': [0, 'never'],

    // for文の中だけ++を許可する
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],

    // devDependenciesで宣言されていない外部モジュールのインポートを禁止importを禁止しない
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],

    // defaultPropsは非推奨になっているためオプショナルな型定義を許可する
    'react/require-default-props': 'off',
  },
};
