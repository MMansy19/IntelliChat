import app from "./app.js";
import { connectToDB } from "./db/connect.js";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log("server start at port ", PORT);
    await connectToDB();
});
//# sourceMappingURL=index.js.map