import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ebd40994e8c2bb36cece028ff32b8ac13f22a06496e097d2fdd85ce23c5c5923"
  }
});
