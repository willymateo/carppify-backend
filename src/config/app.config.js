import "dotenv/config";

const port = process.env.PORT || 0;
const env = process.env.NODE_ENV || "development";
const morganFormat =
  "● [:date[iso]] [:remote-addr :remote-user] :method :url HTTP/:http-version :status :response-time ms - :res[content-length]";

export { morganFormat, port, env };
