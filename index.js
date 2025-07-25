const { LOGGER } = require("./src/common/logs");
const app = require("./src/app");
const config = require("./src/config/config");

const PORT = config.port;

app.listen(PORT, () => {
  LOGGER.info(`CRFQ is running at port: ${PORT}`);
});
