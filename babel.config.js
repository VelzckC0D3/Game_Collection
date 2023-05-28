module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'transform-imports',
      {
        axios: {
          // eslint-disable-next-line no-template-curly-in-string
          transform: 'axios/lib/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
};
