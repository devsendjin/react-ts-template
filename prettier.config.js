/**
 * @type {import('prettier').Config
 */
export default {
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: false,
  requirePragma: false,
  proseWrap: "preserve",
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 120,
  endOfLine: "lf",
  arrowParens: "always",
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
};
