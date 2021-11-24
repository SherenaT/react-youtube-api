import axios from "axios";

const KEY = "AIzaSyCF7URopoZE7EDumEPpi9TtGqLPRiDap9s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
