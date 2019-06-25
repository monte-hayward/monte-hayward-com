import React from "react";
import Hashtags from "./hashtag";
//TODO: import PropTypes from "prop-types";

const Card = ({ icon, caption, description, tags }) => {

  return (
    <figure className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg m-1">
      {icon}
      <figcaption className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{caption}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </figcaption>
      <div className="px-6 py-4">
        <Hashtags texts={tags}/>
      </div>
    </figure>
  )
};

export default Card;
