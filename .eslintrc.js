module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "react/button-has-type": "off",
    "no-console": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
  },
  "ignorePatterns": [ "src/tests/*", "src/serviceWorker.js" ],
};
