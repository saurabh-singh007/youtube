import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";

import { Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Stack from "@mui/material/Stack";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";
import { borderRadius, width } from "@mui/system";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("Stock Market");
    const [videos, setVideos] = useState([]);
    const [filteredVideo, setFilteredVideo] = useState([]);

    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
            .catch((err) => {
                console.log(err);
            });
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: "auto", md: "100vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography>all copyright reserved</Typography>
            </Box>
            <Box p={2} sx={{ height: "92vh", overflowY: "auto", flex: 2 }}>
                <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", font: "5px", marginLeft: "15px" }}>
                    {selectedCategory}
                    <span style={{ color: "#FC1503" }}> Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
