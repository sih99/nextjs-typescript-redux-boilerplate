// const { i18n } = require("./next-i18next.config");
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // i18n,
  distDir: "build",
};
