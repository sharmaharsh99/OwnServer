import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello, my name is Harsh Sharma!")
})

app.get("/about", (req, res) => {
    res.send("I am a 20 year old coder")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me:</h1>+8595607119")
})



app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})