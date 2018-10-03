// module config for webpack
module.exports = (nodeEnv) => nodeEnv === 'development' ?
{} :
({
  rules: [
    {
      use: {
        loader: 'babel-loader',
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                targets: "> 2.5%",
                useBuiltIns: 'entry'
              }
            ]
          ]
        }
      }
    }
  ]
})
