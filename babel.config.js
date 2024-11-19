module.exports = function (api) {
  api.cache(true); // Enable caching for faster builds
  return {
    presets: ["babel-preset-expo"], // Use the Expo preset for Babel
    plugins: [
      // Correct usage of `module-resolver` plugin
      [
        "module-resolver", // Name of the plugin
        {
          alias: {
            "@app": "./src", // Alias for @app -> ./src
            "@components": "./src/components", // Alias for @components -> ./src/components
            "@features": "./src/features", //Alias for @features -> ./src/features
            "@hooks": "./src/hooks", //Alias for @hooks -> ./src/hooks
            "@ultils": "./src/ultils", //Alisa for @ultils -> ./src/ultils
            "@constants": "./src/constants", //Alias for @constant -> ./src/constants
          },
        },
      ],
    ],
  };
};
