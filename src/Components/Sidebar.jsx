import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-9 shadow-lg ">
      <ul>
        <h1 className="font-bold">Subscriptions</h1>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
        <hr />
      </ul>
      <ul>
        <h1 className="font-bold pt-6">Trending</h1>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <hr />
      </ul>
      <ul>
        <h1 className="font-bold pt-6">Popular</h1>
        <li>Gaming</li>
        <li>Entertainment</li>
        <li>Comedy</li>
        <hr />
      </ul>
      <ul>
        <h1 className="font-bold pt-6">Watch Later</h1>
        <li>Report history</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
