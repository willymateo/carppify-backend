import { port, env } from "./config/app.config.js";
import { app } from "./app.js";

const server = app.listen(port, () => {
  console.log(`Environment: ${env}`);
  console.log(`Server is running on port ${port}`);
});

export { server };
