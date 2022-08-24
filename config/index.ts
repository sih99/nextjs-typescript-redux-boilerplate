const configFile = require("./config.json");

const serverEnv = process.env.NODE_ENV;
const config = configFile[serverEnv];

export const REST_API_URL = config["REST_API_URL"];
