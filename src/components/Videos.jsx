import React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
    // console.log(videos)
    return (
        <Stack
            sx={{
                width: "100%",
                backgroundColor: "black",
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "10px",
                borderRadius: "10px",
            }}
        >
            {videos.map((items, idx) => (
                <Box key={idx}>
                    {items.id.videoId && <VideoCard video={items} />}
                    {items.id.channelId && <ChannelCard channelDetail={items} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
