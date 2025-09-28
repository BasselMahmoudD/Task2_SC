import dotenv from "dotenv";
import express from "express";

dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("", () => {
    console.log("hello");
})


app.listen(process.env.PORT, () => {
    console.log("Server is connected");
})