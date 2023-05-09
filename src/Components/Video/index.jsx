// import React from "react";
// import "./style.css";
// import { AiOutlineYoutube } from "react-icons/ai";

// const Video = () => {
//   return (
//     <div className="video-container">
//       <AiOutlineYoutube className="video-icon" />
//       <p className="video-title">
//         Watch the best Technology in<b>Action</b>
//       </p>
//       <p className="video-description">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint
//         accusamus ipsam quo! Repellat, vitae id dolorum quasi ab reiciendis
//         necessitatibus laboriosam fugit accusamus in, veritatis mollitia est
//         eos, culpa quas corporis omnis beatae praesentium fugiat cupiditate
//       </p>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./style.css";
import { AiOutlineYoutube } from "react-icons/ai";
import backgroundImage from "../../img/GalleryPhoto/#2.jpg";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video-container">
      {!isPlaying && (
        <div className="video-icon-container">
          <AiOutlineYoutube className="video-icon" onClick={playVideo} />
        </div>
      )}
      {isPlaying && (
        <div className="video-player">
          <iframe
            src="https://www.youtube.com/embed/{YOUR_VIDEO_ID}"
            frameborder="0"
            allowfullscreen
            title="Youtube video player"
          ></iframe>
          <button onClick={stopVideo}>Stop video</button>
        </div>
      )}
      <p className="video-title">
        Watch the best Technology in<b>Action</b>
      </p>
      <p className="video-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint
        accusamus ipsam quo! Repellat, vitae id dolorum quasi ab reiciendis
        necessitatibus laboriosam fugit accusamus in, veritatis mollitia est
        eos, culpa quas corporis omnis beatae praesentium fugiat cupiditate
      </p>
    </div>
  );
};

export default Video;
