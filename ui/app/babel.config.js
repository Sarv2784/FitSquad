module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        strictMode: false,
        allowTopLevelThis: true,
        loose: true,
      },
    ],
  ],
};
