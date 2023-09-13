import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from "./components";
import "./index.css";

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ bgcolor: "black" }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/videos/:id" element={<VideoDetails />} />
                    <Route path="/channel/:id" element={<ChannelDetails />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
};

export default App;
