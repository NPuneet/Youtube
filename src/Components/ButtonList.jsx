import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Cricket",
    "Live",
    "News",
    "Gaming",
    "Sports",
    "Songs",
    "Movies",
    "Popular",
    "Esports",
    "Podcasts",
    "Trailers",
    "Climbing",
    "Smartphones",
    "Cooking",
  ];
  return (
    <div className="flex">
      {buttonList.map((e) => {
        return <Button name={e} key={e} />;
      })}
    </div>
  );
};

export default ButtonList;
