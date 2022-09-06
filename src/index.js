import { app } from "./app.js";
import "dotenv/config";

const port = process.env.PORT || 0;

const server = app.listen(port, () => {
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Server is running on port ${port}`);
});

export { server };
