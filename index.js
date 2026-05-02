const express = require('express');
const cors = require('cors');

const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());

app.get('/notifications/top', (req, res) => {
  res.json([
    {
      Type: "placement",
      Message: "CSX Corporation hiring",
      Timestamp: "2026-04-22 17:51:18"
    },
    {
      Type: "placement",
      Message: "Advanced Micro Devices hiring",
      Timestamp: "2026-04-22 17:49:42"
    },
    {
      Type: "result",
      Message: "mid-sem",
      Timestamp: "2026-04-22 17:51:30"
    },
    {
      Type: "event",
      Message: "farewell",
      Timestamp: "2026-04-22 17:51:06"
    }
  ]);
});

app.listen(3000, () => {
  console.log("Server running...");
});