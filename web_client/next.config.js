const withFonts = require('next-fonts')
const withImages = require('next-images')
const withCSS = require("@zeit/next-css");
const withSlick = require('react-slick')
const withPlugins = require('next-compose-plugins')
if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
 
      return config;
    }
  };

  
module.exports = withPlugins([
    withFonts,
    withImages,
    withCSS,
    withSlick
],{
    trailingSlash:true,
    env: {
        jwtSecret: "cat123"
    },
});
