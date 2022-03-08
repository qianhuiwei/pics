import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID gkuAi4fKVqJZn9eydVKLgxGdUtsOJ4Pnka7FKV8skJ0"
    }
});