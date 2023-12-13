import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"a3cb45e5fa334f839729f9c97d690cb7"
    }
})