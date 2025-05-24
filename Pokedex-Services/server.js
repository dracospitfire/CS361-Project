require("dotenv").config();
const { connectWebSocket } = require("./websockets/ServiceAConnection");
const express = require("express");
const WebSocket = require('ws');
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 2020;

// Declare the FE_URL variable
const FE_URL = process.env.FE_URL || "http://localhost:3030"; 

// Declare the WS_URL Service A
const SERVICE_A_WS_URL = process.env.SERVICE_A_WS_URL || 'ws://localhost:5050';
connectWebSocket(SERVICE_A_WS_URL);

// Middleware:
app.use(cors({ credentials: true, origin: FE_URL }));
app.use(express.json());

// API Routes
app.use("/api/baseStats", require("./routes/serviceARoutes"));

// Adding "Help World" to base URL to confrim backend is working
app.get("/", (req, res) => {
  res.send("Help World");
});

const os = require("os");
const hostname = os.hostname();

app.listen(PORT, () => {
  // flip server should automatically match whatever server you're on 
  console.log(`Server running:  ${hostname}:${PORT}...`);
});
