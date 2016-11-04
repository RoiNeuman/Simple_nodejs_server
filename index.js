/**
 * Created by Roi on 31/07/2016.
 */
// Register babel to have ES6 support on the server
require('babel-core/register');

// Prevent issues with libraries using this var (see http://tinyurl.com/pcockwk)
delete process.env.BROWSER;

require("./dist/app/server");