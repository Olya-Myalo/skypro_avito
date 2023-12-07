module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "plugin:react/recommended",
      "prettier",
      "plugin:react/jsx-runtime"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
      "import/prefer-default-export": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prop-types": 0,
      "react/destructuring-assignment": [0]
    }
  }
