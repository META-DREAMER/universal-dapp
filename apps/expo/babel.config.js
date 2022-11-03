module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          importSource: '@welldone-software/why-did-you-render',
        },
      ],
    ],
    plugins: [
      'react-native-reanimated/plugin',
      // https://expo.github.io/router/docs/intro#configure-the-babel-plugin
      require.resolve('expo-router/babel'),
    ],
  }
}
