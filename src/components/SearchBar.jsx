import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const onhandleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm("");
        }
    };
    return (
        <Paper
            component="form"
            onSubmit={onhandleSubmit}
            sx={{
                boxShadow: 1,
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                mr: { sm: 5 },
                display: "flex",
                flexDirection: "row",
            }}
        >
            <Input
                className="search-bar"
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                placeholder="search..."
                // style={{ width: "90%" }}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
