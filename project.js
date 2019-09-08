path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
marko_starter = require("marko-starter")
module.exports = marko_starter.projectConfig({
  name: "Lemon Marko Demo", // Optional, but added here for demo purposes,
  lassoConfig: {
    require: {transforms: [
        {
            transform: 'lasso-babel-transform',
            config: {
                extensions: ['.js','.es6','.marko'],
                babelOptions: {
                    presets:['@babel/preset-env']
                }
            }
        }
    ]},
    plugins: [
      'lasso-marko',
      {
        plugin: 'lasso-stylus',
        config: {
            includes: [path.join(__dirname, './src/stylus/mixins/'),path.join(__dirname,'./src/components/**/*')],
            use: function(stylus) {
                stylus.define('add', function(a, b) {
                    a = parseFloat(a);
                    b = parseFloat(b);
                    return a+b;
                });
            },
            define: {
                sub: function(a, b) {
                    a = parseFloat(a);
                    b = parseFloat(b);
                    return a-b;
                }
            },
            imports: [
                path.join(__dirname, './src/stylus/variables.styl')
            ]
        }
    }
    ]
}
});
