import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 6000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
    .catch((error) => console.log(`${error} did not connect`));
//# sourceMappingURL=index.js.map