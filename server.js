const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const db = require("./models");
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Better error handling
db.sequelize.sync()
  .then(() => {
    console.log("✅ MySQL connected and tables synced.");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });

app.get("/", (req, res) => {
  res.send("✅ API is working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});