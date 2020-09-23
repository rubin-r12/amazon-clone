import axios from "axios";

const instance = axios.create({
  //the API (cloud function) URL
  baseURL: "http://localhost:5001/clone-b035e/us-central1/api",
});

export default instance;
