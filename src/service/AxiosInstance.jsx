import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/kisiler",
  headers: {
    "Content-type": "application/json",
  },
});
