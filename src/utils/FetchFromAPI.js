const axios = require("axios");

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: {
        maxResults: "50",
        regionCode: "US",
    },
    headers: {
        "X-RapidAPI-Key": "1c1cd78312msh0f1b80b48a41f4ep1296b0jsn3d49e392552b",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
