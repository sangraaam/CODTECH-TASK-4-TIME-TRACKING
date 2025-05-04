const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Activity = require("./models/Activity");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/timetracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/track", async (req, res) => {
  const { domain, duration, timestamp } = req.body;
  const isProductive = !["youtube.com", "facebook.com"].includes(domain);
  await Activity.create({ domain, duration, timestamp, isProductive });
  res.sendStatus(200);
});

app.get("/analytics", async (req, res) => {
  const data = await Activity.aggregate([
    { $group: { _id: "$domain", total: { $sum: "$duration" } } }
  ]);
  res.json(data);
});

app.get("/report/weekly", async (req, res) => {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const data = await Activity.aggregate([
    { $match: { timestamp: { $gte: weekAgo } } },
    {
      $group: {
        _id: "$isProductive",
        total: { $sum: "$duration" }
      }
    }
  ]);

  const productive = data.find(d => d._id)?.total || 0;
  const unproductive = data.find(d => !d._id)?.total || 0;
  const total = productive + unproductive;

  res.json({
    productive,
    unproductive,
    total,
    productivityScore: ((productive / total) * 100).toFixed(2)
  });
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
