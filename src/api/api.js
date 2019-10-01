import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://jobs.github.com/positions.json"
});
