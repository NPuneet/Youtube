import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import Videocard from "../Components/Videocard";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <Videocard key={index} info={video} />
      ))}
    </div>
  );
};

export default VideosContainer;
