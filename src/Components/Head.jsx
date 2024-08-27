import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);

  useEffect(() => {
    let a = setTimeout(() => {
      getSuggetions();
      return () => {
        clearTimeout(a);
      };
    }, 200);
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggetions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
    setSuggetions(json[1]);
  };
  return (
    <>
      <div className="grid grid-flow-col shadow-lg p-2 m-2 relative">
        <div className="flex col-span-1">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-7 ml-4 cursor-pointer"
            src="data:image/png;base64,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"
            alt=""
          />
          <a href="/">
            <img
              className="h-7 mx-10 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
              alt=""
            />
          </a>
        </div>
        <div className="col-span-10 pl-28 ml-16">
          <div>
            <input
              value={searchQuery}
              onFocus={() => setShowSuggetion(true)}
              onBlur={() => setShowSuggetion(false)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              type="text"
              className="w-1/2 border border-gray-400 rounded-l-full p-1 pl-4 "
            />
            <button className="border border-gray-400 rounded-r-full p-1 px-2 bg-slate-300">
              🔍
            </button>
          </div>
          {showSuggetion && (
            <div className="fixed bg-white py-2 px-3.5 w-[32.5rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggetions.map((s) => {
                  return (
                    <li
                      key={s}
                      className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    >
                      {s}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <div className="flex justify-end rounded-full ">
            <img
              className="h-7"
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="text-m mx-2 font-medium">Sign in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
