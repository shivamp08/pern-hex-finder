const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NDOE_ENV => production or undefined

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/auth", require("./routes/jwtAuth"));
app.use("/api/dashboard", require("./routes/dashboard"));

app.use(express.static("./client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  //serve static content
  //npm run build
}

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}.`);
});
