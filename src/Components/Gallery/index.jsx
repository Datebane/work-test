import React from "react";
import "./style.css";
import GalleryTitle from "./../Gallery/Title/index";
import Items from "./Items/index";

const Gallery = () => {
    return(
        <div className="gallery-container">
            <GalleryTitle />
            <Items/>
        </div>
    )
}

export default Gallery;