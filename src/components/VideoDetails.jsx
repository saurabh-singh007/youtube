import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Box, Stack } from "@mui/material";
import { VideoCard } from "./";
import { FetchFromAPI } from "../utils/FetchFromAPI";

const VideoDetails = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        FetchFromAPI(`videos?part=snippet&id=${id}`).then((data) => setVideoDetail(data.items));
        FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
    }, [id]);
    console.log(videoDetail);
    if (!videoDetail) return "loading....";

    return (
        <Box sx={{ minHeight: "100vh" }} width="100%">
            <Stack sx={{ flexDirection: { sx: "column", md: "column" } }}>
                <Box justifyContent="center" width="100%" margin="1rem 0rem" backgroundColor="white" overflowX="hidden">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls download />
                </Box>
                <Box
                    className="videobox"
                    sx={{
                        width: "100%",
                        backgroundColor: "black",
                        justifyContent: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem",
                        borderRadius: "10px",
                    }}
                >
                    {videos?.map((item, id) => (
                        <VideoCard video={item} key={id} />
                    ))}
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetails;
