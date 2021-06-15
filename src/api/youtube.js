import axios from "axios";

export const API_URL = "https://www.googleapis.com/youtube/v3";
export const KEY = "AIzaSyBZQL9GeGSy6IYHCM0_GX50qPwRtV423zw";

export default axios.create({
  baseURL: API_URL,
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
