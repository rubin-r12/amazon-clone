const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HUEKBJAz65eWSC0v4vojzflQTA7aHbO6gnT60RImYEAzaE5iHcir0VL8lcTAOtWARaabUppzgzZhkLNU2Nmnpbi00XSYBNNDB"
);

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount", total);
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-b035e/us-central1/api
