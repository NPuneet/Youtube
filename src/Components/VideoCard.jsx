import React from "react";

const Videocard = ({ info }) => {
  return (
    <div className="p-2 m-3 w-52 shadow-lg">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.localized?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Videocard;
