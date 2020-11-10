module.exports = {
  presets: [['next/babel']],
  plugins: [
    [
      'babel-plugin-emotion',
      {
        cssPropOptimization: true,
      },
    ],
  ],
}
