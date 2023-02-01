module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["@typescript-eslint", "import", "prettier", "react"],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    "prettier/prettier": "error",
    indent: "off",
    "@typescript-eslint/indent": "off",
    semi: "off",
    
    'import/no-duplicates': 'error',
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external", "internal"],
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: { order: "asc" },
      },
    ],
    
    "react/prop-types": "off",
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
  },
}
