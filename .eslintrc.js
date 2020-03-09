module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "airbnb",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx",  ".js", ".jsx"] }],
    "import/extensions": ["warning", "never"],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "webpack": {
        "config": "webpack.base.config.js"
      }
    },
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "detect"
    }
  }
};
