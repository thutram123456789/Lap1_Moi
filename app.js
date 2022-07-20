const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ "status": "success", "data":{"id": "GH20V7X068", "user": "Võ Ngọc Thu Trâm"} });
});

app.use("/api/contacts", contactsRouter);

module.exports = app;