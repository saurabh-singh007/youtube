import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { Typography } from "@mui/material";

import { FetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${searchTerm}&regionCode=IN`).then((data) => {
            const filteredResults = data.items.filter((item) => {
                // Check if the video's regionCode is not "IN" (India)
                console.log(item.regionCode);
                return item.regionCode !== "IN";
            });
            // console.log(filteredResults);
            setVideos(filteredResults);
        });
    }, [searchTerm]); // eslint-disable-next-line
    // console.log(videos)

    return (
        <Box p={2} sx={{ height: "92vh", overflowY: "auto", flex: 2 }}>
            <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", font: "5px", marginLeft: "15px" }}>
                suggested video for:{searchTerm}
                <span style={{ color: "#FC1503" }}> Videos</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
