path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = require("marko-starter").projectConfig({
  name: "Lemon Marko Demo", // Optional, but added here for demo purposes
  lassoConfig: {
    plugins: [
      'lasso-marko',
      {
        plugin: 'lasso-stylus',
        config: {
            includes: [path.join(__dirname, 'src/stylus/mixins/'),path.join(__dirname,'src/components/**/*')],
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
                path.join(__dirname, 'src/stylus/variables.styl')
            ]
        }
    }
    ]
}
});
